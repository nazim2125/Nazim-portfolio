import { useEffect } from "react";

export default function useGlassReveal(pageRef) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !window.IntersectionObserver) return;

    const running = new Map();
    let disposed = false;
    let motion;

    function reveal(target) {
      // Keep content visible while the optional animation code downloads.
      motion ??= import(
        /* webpackChunkName: "glass-reveal", webpackExports: ["animate"] */
        "framer-motion"
      );

      motion.then(({ animate }) => {
        if (disposed || reducedMotion.matches || target.matches(":focus-within")) return;

        const animation = animate(0, 1, {
          duration: 0.36,
          delay: Number(target.dataset.glassReveal) * 0.06,
          ease: "easeOut",
          onUpdate(progress) {
            target.style.opacity = String(0.76 + 0.24 * progress);
            target.style.transform = `translateY(${9 * (1 - progress)}px)`;
          },
          onComplete() {
            target.style.removeProperty("opacity");
            target.style.removeProperty("transform");
            running.delete(target);
          },
        });

        running.set(target, animation);
      }).catch(() => {
        // Content stays fully visible when the optional chunk is unavailable.
      });
    }

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        reveal(target);
      }
    }, { rootMargin: "0px 0px -5% 0px" });

    for (const content of pageRef.current.querySelectorAll("[data-glass-reveal]")) {
      if (content.getBoundingClientRect().top >= window.innerHeight) observer.observe(content);
    }

    return () => {
      disposed = true;
      observer.disconnect();
      running.forEach((animation, target) => {
        animation.stop();
        target.style.removeProperty("opacity");
        target.style.removeProperty("transform");
      });
    };
  }, [pageRef]);
}
