import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Images from "../components/Images";
import Accordian from "../components/Accordian";
import axios from "axios";

const Home = () => {
  const [meals, setMeals] = useState([]);

  const handleClick = () => {
    const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    async function getMeals() {
      try {
        const res = await axios.get(baseURL);
        // console.log(res);
        setMeals(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    }
    getMeals();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the Food Picker App</h1>
      <p>To choose what food you would like, please select a button.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={() => handleClick()}>
          Random Food
        </Button>{" "}
      </div>
      <div>
        {!meals.length ? (
          <p>Click for Recipe!</p>
        ) : (
          <p>{meals.map((meal) => meal.strMeal)}</p>
        )}
      </div>
      <div>
        <p>{meals.map((meal) => meal.strInstructions)}</p>
      </div>
      <div>
        <Images data={meals}></Images>
      </div>
      <div>
        <Accordian data={meals} />
      </div>
      yeet
      skeet
    </div>
  );
};

export default Home;
