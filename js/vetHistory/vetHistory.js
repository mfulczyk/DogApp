import React, { useState, useEffect } from "react";

function vetHistory({ myDogProp, clearVet }) {
  return (
    <>
      <div className="feedHistoryWrapper">
        {myDogProp.map((el, index) => {
          return (
            <div key={index} className="card feedCard">
              <button
                className="feedBtn btn btn-danger"
                onClick={() => clearVet(el.id)}
              >
                Clear history
              </button>
              <h4>{el.name}</h4>
              <div>
                {el.vet.map((el, index) => {
                  return (
                    <ul className="card vetDiv" key={index}>
                      <h5>Visit nr {index + 1}</h5>
                      <li>
                        <span className="fontello icon-calendar"></span>
                        {el.date}
                      </li>
                      <li>
                        <span className="fontello icon-clock"></span>
                        {el.time}
                      </li>
                      <li>
                        <span className="fontello icon-pencil"></span>
                        {el.vetDescription}
                      </li>
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
export default vetHistory;
