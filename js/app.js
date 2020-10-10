import React from "react";
import ReactDOM from "react-dom";
import DogManager from "./dogManager/dogManager";

function App() {
  return (
    <>
      <DogManager />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
