import React, { useState } from 'react'

function dogFood({ fetchDogFood, testProps }) {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const [food, setFood] = useState({ whatFood: "", howMuch: "" })

    const handleDogFoodSubmit = (e) => {
        e.preventDefault();

        const id = testProps

        const dogFoodValues = {
            food:
            {
                date: date,
                time: time,
                whatFood: food.whatFood,
                howMuch: food.howMuch
            }

        }

        fetchDogFood(id, dogFoodValues)

    }
    return (
        <>
            <button className="btn btn-info">Feed</button>
            <form onSubmit={handleDogFoodSubmit}>
                <select onChange={e => setFood({ ...food, whatFood: e.target.value })} style={{ display: "block" }} type="text" placeholder="Select race">
                    <option defaultValue={"Select your option"} hidden >Select your option</option>
                    <option value="dry dog food">Dry Dog Food</option>
                    <option value="wet dog food">Wet Dog Food</option>
                    <option value="wet dog food">BARF diet</option>
                </select>
                <input onChange={e => setFood({ ...food, howMuch: e.target.value })} type="number" placeholder="How many grams?"></input>
                <button className="btn btn-warning" style={{ display: "block" }}>Feed the dog!</button>
            </form>

        </>
    )
}

export default dogFood
