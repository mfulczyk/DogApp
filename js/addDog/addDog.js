import React, { useState } from 'react'

function addDog({addDog}) {

    const [dogProps, setDogValues] = useState({ name: "", age: "", race: "" })


    const handleSubmit = (e) => {
        e.preventDefault();
        const dogValues = {
            name: dogProps.name,
            race: dogProps.race,
            age: dogProps.age
        }
        addDog(dogValues)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setDogValues({ ...dogProps, name: e.target.value })} value={dogProps.name} style={{ display: "block" }} type="text" placeholder="Your dogs name :)"></input>
                <input onChange={e => setDogValues({ ...dogProps, race: e.target.value })} value={dogProps.race} style={{ display: "block" }} type="text" placeholder="Select race"></input>
                <input onChange={e => setDogValues({ ...dogProps, age: e.target.value })} value={dogProps.age} style={{ display: "block" }} type="number" placeholder="Age"></input>
                <button >Add Your Dog!</button>
            </form>
            <h3>{JSON.stringify(dogProps)}</h3>
        </>
        
    )
}

export default addDog
