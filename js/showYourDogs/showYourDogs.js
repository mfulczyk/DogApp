import React, { useState, useEffect } from 'react'
import DogFood from "../dogFood/dogFood"
import VetVisit from "../vetVisit/vetVisit"

function showYourDogs({ myDogProp, handleDelete, fetchDogFood, fetchDogPhoto, fetchVet, fetchMyDog }) {

    
return (
    <div>
        {myDogProp.map((el, index) => 
        <div className="card-body" style={{border: "2px solid gray", size: "30%", display: "inline-block", margin: "4px 4px"}}key={index}>
            <img onClick={() => fetchDogPhoto(el.race, el.id)}style={{height: "200px", width: "200px"}} src={el.photo}/>
            
            <p value={el.name}> Dog name: {el.name}</p>
            <p>Dog age: {el.age}</p> 
            <p>Dog race: {el.race} </p>
            <DogFood testProps={el.id} fetchDogFood={fetchDogFood}/>
            <VetVisit testProps={el.id} fetchVet={fetchVet}/>
            <button className="btn btn-danger" onClick={()=> handleDelete(el.id)}>Delete</button>
        </div>
        )}
    </div>
)
}

export default showYourDogs
