import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const forms = [
  { name: "Account Opening" },
  { name: "Transaction Form" },
  { name: "Payment Instruction" },
];

function FormColumn({ title, forms, btnLabel }) {
  const navigate = useNavigate()
  return (
    <div className="form-column">
      <button
        className="form-type-btn"
        onClick={() => navigate("/Directory")}>
        {btnLabel}
      </button>
      <div className="top-3"> Frequented Forms in {btnLabel} </div>
      <div className="form-list">
        {forms.map((form, idx) => (
          <div className="form-row" key={form.name}>
            <span className="form-name">{form.name}</span>
            <span className="form-icon" role="img" aria-label="document">
              {/* SVG for document icon */}
              <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="5" y="3" width="14" height="18" rx="2"/>
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="13" y2="15" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <a className="see-more" href="#">See more...</a>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="upload-btn" onClick={() => navigate("/upload")}>Upload</button>
      <div className="logo">
        <img src="src/assets/image.png" alt="UOBKH Logo" className="logo-img" />
      </div>
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon" role="img" aria-label="search">
            {/* SVG for magnifying glass */}
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input type="text" placeholder="" />
        </div>
        <button className="search-btn" onClick={() => navigate("/SearchResults")}>Search</button>
      </div>
      <div className="main-content">
        <div className="investment-header">
          <span className="investment-title">Investment</span>
          <div className="investment-underline" />
        </div>
        <div className="content-row">
          
          <div className="forms-table" style={{textAlign: "center"}}>
            <FormColumn title="UOBKH" btnLabel="UOBKH" forms={forms} />
            <div className="vertical-divider" />
            <FormColumn title="Onshore" btnLabel="Onshore" forms={forms} />
            <div className="vertical-divider" />
            <FormColumn title="Offshore" btnLabel="Offshore" forms={forms} />
          </div>
        </div>
        <div className="dots">&#8942;</div>
      </div>
    </div>
  );
}
