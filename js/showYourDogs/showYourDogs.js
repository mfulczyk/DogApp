import React, { useState } from 'react'

function showYourDogs({ myDogProp, handleDelete }) {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const [food, setFood] = useState({date:"", time: "", whatFood: "", howMuch: ""})

    const handleSubmit = (e) => {
        e.preventDefault();
        const dogValues = {
            id: "",
            name: dogProps.name,
            race: dogProps.race,
            age: dogProps.age,
            food: [
                {
                    date: "",
                    time: "",
                    whatFood: "",
                    howMuch: ""
                }
            ]
        }
        addDog(dogValues)
    }

return (
    <div>
        {myDogProp.map((el, index) => 
        <div className="card-body" style={{border: "2px solid gray", display: "inline-block", margin: "4px 4px"}}key={index}>
            <p value={el.name}> Dog name: {el.name}</p>
            <p>Dog age: {el.age}</p> 
            <p>Dog race: {el.race} </p>
            <button className="btn btn-info">Feed</button>
            <button className="btn btn-danger" onClick={()=> handleDelete(el.id)}>Delete</button>
            <form onSubmit={handleSubmit}>
                <select style={{ display: "block" }} type="text" placeholder="Select race">
                    <option value="dry dog food">Dry Dog Food</option>
                    <option value="wet dog food">Wet Dog Food</option>
                    <option value="wet dog food">BARF diet</option>
                </select>
                <input type="number" placeholder="How many grams?"></input>
                <button className="btn btn-warning" style={{display: "block"}}>Feed the dog!</button>
            </form>
            <h3>{date}</h3>
            <h3>{time}</h3>

        </div>)}
    </div>
)
}

export default showYourDogs
