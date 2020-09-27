import React, { useState, useEffect } from 'react';
import AddDog from "../addDog/addDog";
import { API_URL_BREEDS, API_URL_USERDOGS } from "../variables/API";
import ShowYourDogs from "../showYourDogs/showYourDogs";

function dogManager() {

    const [dogBreed, setDogBreed] = useState([''])
    const [myDog, setMyDog] = useState([''])
    const [myDogPhoto, setMyDogPhoto] = useState([''])

    useEffect(() => {
        fetchAllDogs(), fetchMyDog()
    }, [])

    const addDog = (dogValues) => {

            fetch(API_URL_USERDOGS, {
                method: "POST",
                body: JSON.stringify(dogValues),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(fetchAllDogs)
                .then(fetchMyDog)
    }

    const fetchAllDogs = () => {
        fetch(API_URL_BREEDS)
            .then(resp => resp.json())
            .then(allBreeds => setDogBreed(allBreeds))
    }

    const fetchMyDog = () => {
        fetch(API_URL_USERDOGS)
            .then(resp => resp.json())
            .then(dog => setMyDog(dog))

    }

    const fetchDogPhoto = (race, id) => {
        
        let obj
        fetch(`https://dog.ceo/api/breed/${race}/images/random`)
            .then(resp => resp.json())
            .then(photo => obj = photo.message)
            .then(() => fetch(`http://localhost:3000/userDogs/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    photo: obj
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(fetchMyDog))

        // const fDog = myDog.find(dog => dog.id === id)

        


        //on to pobiera ze stanu z ktorego pobieraja wszystkie psy
        //wrzucic to do jednego stanu na jednego psa
    }

    const fetchDogFood = (id, dogFoodValues) => {

        const fDog = myDog.find(dog => dog.id === id);
        fetch(`http://localhost:3000/userDogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                food: [
                    ...fDog.food,
                    {
                        "date": dogFoodValues.food.date,
                        "time": dogFoodValues.food.time,
                        "whatFood": dogFoodValues.food.whatFood,
                        "howMuch": dogFoodValues.food.howMuch
                    }
                ]
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(fetchMyDog)
    }

    const deleteDog = (id) => {
        console.log("DELETE DOG WITH ID: ", id)
        fetch(`http://localhost:3000/userDogs/${id}`, {
            method: "DELETE"
        }).then(fetchMyDog)
    }

    return (
        <div>
            <AddDog addDog={addDog} dogProp={dogBreed} />
            <button className="btn btn-secondary" onClick={fetchMyDog}  >Moje Psy</button>
            <ShowYourDogs fetchDogPhoto={fetchDogPhoto} photoProp={myDogPhoto.message} fetchDogFood={fetchDogFood} handleDelete={deleteDog} myDogProp={myDog} />
        </div>
    )
}

export default dogManager
