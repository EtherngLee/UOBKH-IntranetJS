import React from "react";
import "./SearchResults.css";
import { FaFilePdf } from "react-icons/fa";

const PdfIcon = () => (
  <span className="pdf-icon" role="img" aria-label="pdf">
    {/* Simple PDF SVG icon */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#be3e34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff"/>
      <text x="7" y="18" fontSize="10" fontWeight="bold" fill="#be3e34">PDF</text>
    </svg>
  </span>
);

export default function SearchResults() {
  return (
    <div className="search-results-container">
      <div className="search-bar-wrapper">
        <input className="search-bar" type="text" value="Onboarding" readOnly />
      </div>
      <div className="results-table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th><b>Form</b></th>
              <th><b>Tags</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FaFilePdf />Form 1</td>
              <td>..., <b>Onboarding</b>, Onshore, Hansard</td>
            </tr>
            <tr>
              <td><FaFilePdf />Form 2</td>
              <td>Principal, 2025, <b>Onboarding</b>, ...</td>
            </tr>
            <tr>
              <td><FaFilePdf />Form 3</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}