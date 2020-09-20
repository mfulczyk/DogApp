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
        fetch('http://localhost:3000/dogs')
            .then(resp => resp.json())
            .then(allBreeds => setDogBreed([allBreeds]))

        console.log(dogBreed)
    }

    // setInterval(function(){ console.log(dogBreed) }, 1000);


    return (
        <div>
            <AddDog addDog={addDog}/>
            <button onClick={fetchAllDogs}>Fetch</button>
            <ul>
                {dogBreed.map(el => <li>Test {el.dogs}</li>)}
            </ul>
        </div>
    )
}

export default dogManager
