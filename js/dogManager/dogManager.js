import React, { useState, useEffect } from "react";
import AddDog from "../addDog/addDog";
import { API_URL_BREEDS, API_URL_USERDOGS } from "../variables/API";
import ShowYourDogs from "../showYourDogs/showYourDogs";
import FeedHistory from "../feedHistory/feedHistory";
import VetHistory from "../vetHistory/vetHistory";

function dogManager() {
  const [dogBreed, setDogBreed] = useState([""]);
  const [myDog, setMyDog] = useState([
    {
      age: "12",
      food: [{}],
      id: 1,
      name: "Test",
      photo: "https://images.dog.ceo/breeds/otterhound/n02091635_4368.jpg",
      race: "otterhound",
      vet: [],
    },
  ]);

  useEffect(() => {
    fetchMyDog(), fetchAllDogs();
  }, []);

  const fetchAllDogs = () => {
    fetch(API_URL_BREEDS)
      .then((resp) => resp.json())
      .then((allBreeds) => setDogBreed(allBreeds));
  };

  const fetchMyDog = () => {
    fetch(API_URL_USERDOGS)
      .then((resp) => resp.json())
      .then((dog) => setMyDog(dog));
  };

  const fetchDogPhoto = (race, id) => {
    let obj;
    fetch(`https://dog.ceo/api/breed/${race}/images/random`)
      .then((resp) => resp.json())
      .then((photo) => (obj = photo.message))
      .then(() =>
        fetch(`http://localhost:3000/userDogs/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            photo: obj,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(fetchMyDog)
      );
  };

  const addDog = (dogValues) => {
    let obj;
    fetch(`https://dog.ceo/api/breed/${dogValues.race}/images/random`)
      .then((resp) => resp.json())
      .then((resp) => (obj = resp.message))

      .then(() =>
        fetch(API_URL_USERDOGS, {
          method: "POST",
          body: JSON.stringify(dogValues, (dogValues.photo = obj)),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(fetchAllDogs)
          .then(fetchMyDog)
      );
  };

  const fetchDogFood = (id, dogFoodValues) => {
    const fDog = myDog.find((dog) => dog.id === id);
    fetch(`http://localhost:3000/userDogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        food: [
          ...fDog.food,
          {
            date: dogFoodValues.food.date,
            time: dogFoodValues.food.time,
            whatFood: dogFoodValues.food.whatFood,
            howMuch: dogFoodValues.food.howMuch,
          },
        ],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(fetchMyDog);
  };

  const fetchVet = (id, vetValues) => {
    const fDog = myDog.find((dog) => dog.id === id);
    fetch(`http://localhost:3000/userDogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        vet: [
          ...fDog.vet,
          {
            date: vetValues.vet.date,
            time: vetValues.vet.time,
            vetDescription: vetValues.vet.vetDescription,
          },
        ],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(fetchMyDog);
  };

  const deleteDog = (id) => {
    console.log("DELETE DOG WITH ID: ", id);
    fetch(`http://localhost:3000/userDogs/${id}`, {
      method: "DELETE",
    }).then(fetchMyDog);
  };

  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="bigBtn btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={fetchMyDog}
              >
                MY DOGS!
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <ShowYourDogs 
              
              fetchVet={fetchVet}
              fetchDogPhoto={fetchDogPhoto}
              fetchDogFood={fetchDogFood}
              handleDelete={deleteDog}
              myDogProp={myDog}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="bigBtn btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                ADD YOUR DOG!
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <AddDog addDog={addDog} dogProp={dogBreed} />
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="bigBtn btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                FEED HISTORY!
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <FeedHistory myDogProp={myDog} />
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="bigBtn btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                VET HISTORY!
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <VetHistory myDogProp={myDog} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dogManager;
