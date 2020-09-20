import React, { useState, useEffect } from 'react';
import AddDog from "../addDog/addDog";
import {API_URL_BREEDS, API_URL_USERDOGS} from "../variables/API";
import ShowYourDogs from "../showYourDogs/showYourDogs";

function dogManager() {

    const [dogBreed, setDogBreed] = useState([''])
    const [myDog, setMyDog] = useState([''])


    useEffect(() => {
        fetchAllDogs()
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
    } 

    const fetchAllDogs = () => {
        fetch(API_URL_BREEDS)
            .then(resp => resp.json())
            .then(allBreeds => setDogBreed(allBreeds))

    }

    // const fetchMyDog = () => {
    //     fetch(API_URL_USERDOGS)
    //         .then(resp => resp.json())
    //         .then(dog => setDogBreed(myDog))

        
        
    //     console.log(myDog)
    // }

    return (
        <div>
            <AddDog addDog={addDog} dogProp={dogBreed} />
            <ShowYourDogs/>
            {/* <button onClick={fetchMyDog}>Mój Pies</button> */}
        </div>
    )
}

export default dogManager
