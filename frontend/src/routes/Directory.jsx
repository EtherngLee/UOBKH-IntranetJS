 import React, { useState } from "react";
import "../Directory.css";

export default function Directory() {
  const [open, setOpen] = useState({
    uwealth: true,
    accountOpening: true,
    corpFolder: true,
    indivFolder: false,
    otherStuff1: false,
    transfer: false,
    otherStuff2: false,
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="uobkh-container">
      <h1 className="uobkh-title">UOBKH</h1>
      <div className="tree-list">
        <div className="tree-item">
          <span className="tree-toggle" onClick={() => toggle("uwealth")}>{open.uwealth ? "▼" : "▶"}</span>
          <span className="tree-label tree-bold">1. UWEALTH</span>
        </div>
        {open.uwealth && (
          <div className="tree-children">
            <div className="tree-item">
              <span className="tree-toggle" onClick={() => toggle("accountOpening")}>{open.accountOpening ? "▼" : "▶"}</span>
              <span className="tree-label tree-bold">1. Account Opening</span>
            </div>
            {open.accountOpening && (
              <div className="tree-children">
                <div className="tree-item">
                  <span className="tree-toggle" onClick={() => toggle("corpFolder")}>{open.corpFolder ? "▼" : "▶"}</span>
                  <span className="tree-label tree-bold">Corporate Folder</span>
                </div>
                {open.corpFolder && (
                  <div className="tree-children">
                    <div className="forms-box">Forms</div>
                  </div>
                )}
                <div className="tree-item">
                  <span className="tree-toggle" onClick={() => toggle("indivFolder")}>{open.indivFolder ? "▼" : "▶"}</span>
                  <span className="tree-label tree-bold">Individual Folder</span>
                </div>
                <div className="tree-item">
                  <span className="tree-toggle" onClick={() => toggle("otherStuff1")}>{open.otherStuff1 ? "▼" : "▶"}</span>
                  <span className="tree-label tree-bold">Other stuff</span>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="tree-item">
          <span className="tree-toggle" onClick={() => toggle("transfer")}>{open.transfer ? "▼" : "▶"}</span>
          <span className="tree-label tree-bold">2. Internal-External Transfer Form</span>
        </div>
        <div className="tree-item">
          <span className="tree-toggle" onClick={() => toggle("otherStuff2")}>{open.otherStuff2 ? "▼" : "▶"}</span>
          <span className="tree-label tree-bold">Other Stuff</span>
        </div>
      </div>
    </div>
  );
}
