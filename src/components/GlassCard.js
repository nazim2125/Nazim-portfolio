import React, { useRef } from "react";

function GlassCard({ as: Element = "div", className = "", revealOrder, children, ...attributes }) {
  const spotlight = useRef(null);

  function moveSpotlight(event) {
    if (event.pointerType === "touch") return;

    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const highlight = spotlight.current;
    highlight.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    if (!highlight.dataset.active) highlight.dataset.active = "true";
  }

  function hideSpotlight() {
    delete spotlight.current.dataset.active;
  }

  return (
    <Element
      {...attributes}
      className={`glass-card rounded-3xl border-[1px] border-solid border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/25 ${className}`}
      onPointerMove={moveSpotlight}
      onPointerLeave={hideSpotlight}
      onPointerCancel={hideSpotlight}
    >
      <span className="glass-spotlight-clip" aria-hidden="true">
        <span ref={spotlight} className="glass-spotlight" />
      </span>
      <div className="glass-content" data-glass-reveal={revealOrder}>{children}</div>
    </Element>
  );
}

export default GlassCard;
