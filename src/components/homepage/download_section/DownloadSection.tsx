import React from "react";
import "./downloadsection.scss";

function DownloadSection() {
  return (
    <div id="download-section" className="w-100 d-flex  justify-content-center">
      <div
        id="download-container"
        className="d-flex align-items-center justify-content-between py-5 px-2 px-md-0"
      >
        <a
          href="/assets/pdf/Zeltlagerflyer2024.pdf"
          download
          className="btn btn-primary"
        >
          Flyer herunterladen
        </a>
        <a
          href="/assets/pdf/Zeltlageranmeldung2024.pdf"
          download
          className="btn btn-primary"
        >
          Anmeldung herunterladen
        </a>
        <a
          href="/assets/pdf/Zeltlagerplakat2024.pdf"
          download
          className="btn btn-primary"
        >
          Plakat herunterladen
        </a>
      </div>
    </div>
  );
}

export default DownloadSection;
