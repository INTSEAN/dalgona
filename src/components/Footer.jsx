import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer-text">
        Developed by <strong> <a className="dalgona-accent" target="_blank" href="https://seandonovan.tech">SEAN DONOVAN</a></strong> – 2025. Inspired by Squid Game.
      </p>
      <p className="small-print">
        Disclaimer: “dALGOna” is a fan-made concept inspired by Squid Game; we
        are not affiliated with Netflix or official Squid Game content.
      </p>
    </footer>
  );
}

export default Footer;
