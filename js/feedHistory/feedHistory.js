import React, { useState, useEffect } from "react";

function feedHistory({ myDogProp }) {
  const [foodList, setFoodList] = useState("");

  const changeHandler = (e) => {
    setFoodList(e.target.value);
    console.log(foodList);
  };

  return (
    <>
    <button>Clear History!</button>
      {myDogProp.map((el, index) => {
        return (
          <div key={index}>
            <p>{el.name}</p>
            <div>
              {el.food.map((el, index) => {
                return (
                  <ul key={index}>
                    <p>Meal nr {index+1}</p>
                    <li>{el.date}</li>
                    <li>{el.time}</li>
                    <li>{el.whatFood}</li>
                    <li>{el.howMuch}g</li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default feedHistory;
