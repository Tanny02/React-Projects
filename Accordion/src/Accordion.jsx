import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyMulti = [...multi];
    const idIndex = cpyMulti.indexOf(id);
    if (idIndex === -1) {
      cpyMulti.push(id);
    } else {
      cpyMulti.splice(idIndex, 1);
    }
    setMulti(cpyMulti);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Enable Single Selection" : "Enable Multiselection"}
      </button>
      <div className="accordion">
        {data.map((item) => {
          const { id, question, answer } = item;
          return (
            <div
              className="item"
              key={id}
              onClick={
                enable
                  ? () => handleMultiSelection(id)
                  : () => handleSingleSelection(id)
              }
            >
              <div className="title">
                <h3>{question}</h3>
              </div>
              {enable
                ? multi.indexOf(id) !== -1 && (
                    <div className="content">
                      <p>{answer}</p>
                    </div>
                  )
                : selected === id && (
                    <div className="content">
                      <p>{answer}</p>
                    </div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
