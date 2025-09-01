import React from "react";
import "./ComingSoon.css";

function ComingSoon() {
  return (
    <div className="commingSoonContainer w-100 d-flex flex-column align-items-center justify-content-center text-center">
      <h2 className="body-heading main-text">Coming Soon!</h2>
      <h3 className="body-heading">Peak Care EDPK</h3>
      <p className="body-paragraph text-center w-75">
       We deliver healthy, efficient, and quiet homes. Our four focus areas:
        <br/>
        1. Mould – assessment & remediation
        <br/>
        2. Moisture – diagnostics & control
        <br/>
        3. Thermal – insulation & thermal-bridge repair
        <br/>
        4. Acoustics – soundproofing & acoustic comfort
        <br/>
        From expert inspection through DIY kits to full-service projects — EU-compliant, low-dust methods, measurable results.
      </p>
    </div>
  );
}

export default ComingSoon;