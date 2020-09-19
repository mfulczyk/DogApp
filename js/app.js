import React from "react";
import ReactDOM from "react-dom";
import MainInputs from "./mainComponents/mainInputs"



function App() {
  return (
    <div>

      <h1>New task</h1>
      <MainInputs/>
      
    
    </div>

    
  )
}

ReactDOM.render(<App/>, document.querySelector("#app"));