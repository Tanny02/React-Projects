import React from "react";
import { useState } from "react";
import "./QRGenerator.css";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const generate = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="qr-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={generate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRGenerator;
