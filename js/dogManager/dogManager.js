import React, { useState, useEffect } from 'react';
import AddDog from "../addDog/addDog"

function dogManager() {

    const [dogBreed, setDogBreed] = useState([''])

    useEffect(() => {
        fetchAllDogs()
    }, [])

    const addDog = (dogValues) => {
        console.log(JSON.stringify(dogValues))
    } 

    const fetchAllDogs = () => {
        fetch('http://localhost:3000/dogs/')
            .then(resp => resp.json())
            .then(allBreeds => setDogBreed(allBreeds))

    }
    




    return (
        <div>
            <AddDog addDog={addDog} dogProp={dogBreed} />
        </div>
    )
}

export default dogManager
