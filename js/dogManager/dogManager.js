import React, { useState, useEffect } from 'react';
import AddDog from "../addDog/addDog";
import { API_URL_BREEDS, API_URL_USERDOGS } from "../variables/API";
import ShowYourDogs from "../showYourDogs/showYourDogs";

function dogManager() {

    const [dogBreed, setDogBreed] = useState([''])
    const [myDog, setMyDog] = useState([''])

    useEffect(() => {
        fetchAllDogs(), fetchMyDog()
    }, [])

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
        
        let obj;
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

    }

     const addDog = (dogValues) => {
        let obj;
        fetch(`https://dog.ceo/api/breed/${dogValues.race}/images/random`)
        .then(resp => resp.json())
        .then(resp => obj = resp.message)
        
        .then(() => fetch(API_URL_USERDOGS, {
                method: "POST",
                body: JSON.stringify(dogValues, dogValues.photo=obj),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(fetchAllDogs)
                .then(fetchMyDog)

        )

            
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

    const fetchVet = (id, vetValues) => {
        
        const fDog = myDog.find(dog => dog.id === id);
        fetch(`http://localhost:3000/userDogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                vet: [
                    ...fDog.vet,
                    {
                        "date": vetValues.vet.date,
                        "time": vetValues.vet.time,
                        "whatFood": vetValues.vet.vetDescription
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
            <ShowYourDogs fetchVet={fetchVet} fetchDogPhoto={fetchDogPhoto} fetchDogFood={fetchDogFood} handleDelete={deleteDog} myDogProp={myDog} />
        </div>
    )
}

export default dogManager
