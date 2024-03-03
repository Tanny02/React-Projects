import React from "react";
import "./Popup.css";

const Popup = ({ id, header, body, footer, close }) => {
  return (
    <div id={id || "Popup"} className="popup">
      <div className="popup-container">
        <div className="header">
          <span onClick={close} className="close-item">
            &times;
          </span>
          <h1>{header ? header : "Header"}</h1>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2>This is the footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Popup;
