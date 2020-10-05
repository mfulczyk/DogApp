import React, { useState, useEffect } from "react";

function feedHistory({ myDogProp }) {

  return (
    <>
    <button>Clear History!</button>
    <div className="feedHistoryWrapper">
      {myDogProp.map((el, index) => {
        return (
          <div className="card feedCard" key={index}>
            <h4>{el.name}</h4>
            <div>
              {el.food.map((el, index) => {
                return (
                  <>
                    <p>Meal nr {index+1}</p>
                      <ul key={index}>
                        <li>{el.date}</li>
                        <li>{el.time}</li>
                        <li>{el.whatFood}</li>
                        <li>{el.howMuch}g</li>
                      </ul>
                  </>
                  
                );
              })}
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default feedHistory;
