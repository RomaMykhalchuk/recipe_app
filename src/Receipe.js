import React from "react";
import style from "./recipe.module.css"


const Receipe = props => {
  return (
    <div className={style.recipe}>
      <h2 >{props.title}</h2>
      <ol>
        {props.ingredients.map((currentIngredient) => (
          <li>{currentIngredient.text}</li>
  ))}
      </ol>
      <p>Calories: {props.calories}</p>
      <img src={props.image} alt="nothing" className={style.image} />
    </div>
  );
};

export default Receipe;
