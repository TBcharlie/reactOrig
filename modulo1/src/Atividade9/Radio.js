import React from "react";

const Radio = ({ pergunta, options, id, active, value, onChange }) => {
  if (active === false) return null;
  return (
    <div>
      <fieldset
        style={{
          padding: "2rem",
          marginBottom: "1rem",
          border: "2px solid #eee",
        }}
      >
        <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
        {options.map((option) => {
          return (
            <label
              key={option}
              style={{ marginBottom: "1rem", fontFamily: "monospace" }}
            >
              <input
                type="radio"
                id={id}
                value={option}
                checked={value === option}
                onChange={onChange}
              />
              {option}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Radio;
