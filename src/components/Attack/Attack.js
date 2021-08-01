import React from "react";
import "./attack.css";

const Attack = ({ attack, returnType }) => {
  return (
    <div className="attack">
      <div className="attack-title">
        <h4>{attack.name}</h4>
        <div className="cost-container">
          {attack.cost.map((type, index) => (
            <img
              src={returnType(type)}
              alt={type}
              className="cost-image"
              key={index}
            />
          ))}
        </div>
        <h3 className="damage">{attack.damage}</h3>
      </div>
      <p>{attack.text}</p>
    </div>
  );
};

export default Attack;
