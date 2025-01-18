import React, { useState } from "react";
import "./DownloadSection.css";
import SpotlightCard from "./SpotlightCard";

function DownloadSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="download-section" id="download">
      <h2 className="download-title">Download Your Coding Questions</h2>
      <p>
        Ready to take on the challenge? Download the <em>dALGOna</em> coding
        interview questions, and see if you can survive the ultimate test!
      </p>
      <button className="expand-button" onClick={toggleExpand}>
        {isExpanded ? "-" : "+"}
      </button>
      {isExpanded && (
        <div className="expandable-content">
          <p>
            <span className="highlight">CitadelQuestions.py</span><br />
            <strong>Title:</strong> Squid Game Themed Citadel Interview Preparation<br />
            <strong>Description:</strong><br />
            This file contains a series of coding challenges inspired by Netflix's <em>Squid Game</em>, covering topics such as Dynamic Programming, Two Pointers, and Depth-First Search (DFS). Each problem includes a space for working out the solution and the final Python3 solution. The questions are arranged in increasing difficulty and are designed to help you prepare for interviews at Citadel or similar competitive technical interviews. At the end, you will find general questions that an interviewer may ask to assess your mastery of the material.<br />
            <strong>Note:</strong> Some problems are intentionally left with spaces for your working steps. Please try them on your own before reviewing the provided solution.<br />
            <strong>Usage:</strong><br />
            - Attempt each challenge in the space provided.<br />
            - Check the solution afterward, or if you get stuck.<br />
            - Practice explaining your thought process out loud, as in a real interview environment.<br />
          </p>
        </div>
      )}
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <i className="fa fa-lock"></i>
        <h2>Download Now</h2>
        <span style={{ color: 'black' }}>
          <p>Download the dALGOna coding interview questions and see if you can survive the ultimate test!</p>
          <a href="/dALGOna-questions.pdf" download className="download-button">
            Download Now
          </a>
        </span>
      </SpotlightCard>
    </section>
  );
}

export default DownloadSection;
