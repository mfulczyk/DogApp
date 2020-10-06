import React, { useState, useEffect } from "react";

function vetHistory({ myDogProp }) {

  return (
    <>
      <button>Clear History!</button>
      <div className="feedHistoryWrapper">
          {myDogProp.map((el, index) => {
            return (
              <div key={index} className="card feedCard" >
                <p>{el.name}</p>
                <div>
                  {el.vet.map((el, index) => {
                    return (
                      <ul className="card feedDiv" key={index}>
                        <p>Vistit nr {index+1}</p>
                        <li><span className="fontello icon-calendar"></span>{el.date}</li>
                        <li><span className="fontello icon-clock"></span>{el.time}</li>
                        <li><span className="fontello icon-pencil"></span>{el.vetDescription}g</li>
                      </ul>
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
export default vetHistory
