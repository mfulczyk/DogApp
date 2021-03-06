import React, { useState } from "react";

function addDog({ addDog, dogProp }) {
  const [dogProps, setDogValues] = useState({
    name: "",
    age: "",
    race: "",
    food: "",
  });

  const dogList = Object.keys(dogProp);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dogValues = {
      id: "",
      photo: "",
      name: dogProps.name,
      race: dogProps.race,
      age: dogProps.age,
      vet: [],
      food: [],
    };
    addDog(dogValues);
  };

  return (
    <>
      <form className="addDogForm" onSubmit={handleSubmit}>
        <input
          className="form-control inputAddDog"
          onChange={(e) => setDogValues({ ...dogProps, name: e.target.value })}
          value={dogProps.name}
          style={{ display: "block" }}
          type="text"
          placeholder="Your dogs name :)"
        ></input>
        <select
          className="form-control selectAddDog"
          onChange={(e) => setDogValues({ ...dogProps, race: e.target.value })}
          value={dogProps.race}
          style={{ display: "block" }}
          type="text"
          placeholder="Select race"
        >
          <option defaultValue={"Select your race"} hidden>
            Select your race
          </option>
          {dogList.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </select>

        <input
          className="form-control inputAge"
          onChange={(e) => setDogValues({ ...dogProps, age: e.target.value })}
          value={dogProps.age}
          style={{ display: "block" }}
          type="number"
          placeholder="Age"
        ></input>
        <button className="btn btn-success">Add Your Dog!</button>
      </form>
    </>
  );
}

export default addDog;
