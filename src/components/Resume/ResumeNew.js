import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

import pdf from "../../Assets/Mohd Nazim Rasalat QA Automation Engineer CV.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Keep the PDF inside the browser width
  const resumeWidth =
    width >= 1200
      ? 900
      : width >= 768
      ? width - 80
      : width - 30;

  return (
    <div>
      <Particle />

      <Container>

        <Row className="resume">
          <Document
            file={pdf}
            className="resume-document"
            loading="Loading CV..."
            error="Unable to load CV."
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(new Array(numPages || 0), (_, index) => (
              <Page
                key={`resume-page-${index + 1}`}
                pageNumber={index + 1}
                width={resumeWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;