import React from "react";

function feedHistory({ myDogProp, clearFeed }) {
  return (
    <>
      <div className="feedHistoryWrapper">
        {myDogProp.map((el, index) => {
          return (
            <div className="card feedCard" key={index}>
              <button
                className="btn btn-danger feedBtn"
                onClick={() => clearFeed(el.id)}
              >
                Clear history
              </button>
              <h4>{el.name}</h4>
              <div>
                {el.food.map((el, index) => {
                  return (
                    <div className="card feedDiv" key={index}>
                      <h5>Meal nr {index + 1}</h5>
                      <ul key={index}>
                        <li>
                          <span className="fontello icon-calendar"></span>
                          {el.date}
                        </li>
                        <li>
                          <span className="fontello icon-clock"></span>
                          {el.time}
                        </li>
                        <li>
                          <span className="fontello icon-food"></span>
                          {el.whatFood}
                        </li>
                        <li>
                          <span className="fontello icon-balance-scale"></span>
                          {el.howMuch}g
                        </li>
                      </ul>
                    </div>
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
