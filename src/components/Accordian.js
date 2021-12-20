import React, { useState } from "react";
import "./Accordian.css";

const Accordian = (data) => {
  const [isActive, setIsActive] = useState(false);

  const meals = data.data;

  const obj = meals[0];

  let ingredients = [];

  if (obj) {
    for (let i = 1; i <= 20; i++) {
      if (obj["strIngredient" + i]) {
        ingredients.push(
          `${obj["strIngredient" + i]} - ${obj["strMeasure" + i]}`
        );
      } else {
        break;
      }
    }
  }

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <div>Ingredients</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content">{ingredients.join("\n")}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
