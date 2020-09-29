import React, { useState, useEffect } from "react";

function vetHistory({ myDogProp }) {

  return (
    <>
    <button>Clear History!</button>
      {myDogProp.map((el, index) => {
        return (
          <div key={index}>
            <p>{el.name}</p>
            <div>
              {el.vet.map((el, index) => {
                return (
                  <ul key={index}>
                    <p>Vistit nr {index+1}</p>
                    <li>Date - {el.date}</li>
                    <li>Time - {el.time}</li>
                    <li>Visit description - {el.vetDescription}g</li>
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
export default vetHistory
