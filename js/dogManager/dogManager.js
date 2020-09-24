import React, { useState, useEffect } from 'react';
import AddDog from "../addDog/addDog";
import {API_URL_BREEDS, API_URL_USERDOGS} from "../variables/API";
import ShowYourDogs from "../showYourDogs/showYourDogs";

function dogManager() {

    const [dogBreed, setDogBreed] = useState([''])
    const [myDog, setMyDog] = useState([''])


    useEffect(() => {
        fetchAllDogs(), fetchMyDog()
    }, [])

    const addDog = (dogValues) => {
        console.log(dogValues),
        fetch(API_URL_USERDOGS, {
            method: "POST",
            body: JSON.stringify(dogValues),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then( fetchAllDogs )
        .then(  fetchMyDog  )
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

    const fetchDogFood = (id, ) => {
        fetch(`http://localhost:3000/userDogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                "food": [{
                    "date": "test",
                    "time": "test2",
                    "whatFood": "test3",
                    "howMuch": "123"
                }]}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        }).then(response => response.json())
          .then(json => console.log(json))
    }

    const deleteDog = (id) => {
        console.log("DELETE DOG WITH ID: ", id)
        fetch(`http://localhost:3000/userDogs/${id}`, {
            method: "DELETE"
        }).then( fetchMyDog )
    }

    return (
        <div>
            <AddDog addDog={addDog} dogProp={dogBreed} />
            <button className="btn btn-secondary" onClick={fetchMyDog}  >Moje Psy</button>
            <ShowYourDogs handleDelete={deleteDog} myDogProp={myDog}/>
            
            <button onClick={fetchDogFood}>Test</button>
        </div>
    )
}

export default dogManager
