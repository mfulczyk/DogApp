import React, { useState } from 'react';
import AddDog from "../addDog/addDog"

function dogManager() {

    const [dogBreed, setDogBreed] = useState([])

    const addDog = (dogValues) => {
        console.log(JSON.stringify(dogValues))
    } 

    const fetchAllCars = () => {
        fetch('http://localhost:3000/dogs')
            .then(resp => resp.json())
            .then(allBreeds => setDogBreed([allBreeds]))

        console.log(dogBreed)
    }

    // setInterval(function(){ console.log(dogBreed) }, 1000);


    return (
        <div>
            <AddDog addDog={addDog}/>
            <button onClick={fetchAllCars}>Fetch</button>
            <ul>

                {/* {dogBreed.map(el => <div>Test {el.message}</div>)} */}
            </ul>
        </div>
    )
}

export default dogManager
