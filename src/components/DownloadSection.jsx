import React from "react";
import "./DownloadSection.css";

function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <h2 className="download-title">Download Your Coding Questions</h2>
      <p>
        Ready to take on the challenge? Download the <em>dALGOna</em> coding
        interview questions, and see if you can survive the ultimate test!
      </p>
      <a href="/dALGOna-questions.pdf" download className="download-button">
        Download Now
      </a>
    </section>
  );
}

export default DownloadSection;
