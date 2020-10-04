import React, { useState, useEffect } from 'react'
import DogFood from "../dogFood/dogFood"
import VetVisit from "../vetVisit/vetVisit"

function showYourDogs({ myDogProp, handleDelete, fetchDogFood, fetchDogPhoto, fetchVet, fetchMyDog }) {
// do zmiennej idklasy i do niej sie odwolywac w hidden/collapse
    
return (
    <div className="mainDiv" style={{backgroundColor: "#fafafa", margin: "0 auto"}}>
        {myDogProp.map((el, index) => 
        <div className="card dogCard" key={index}>
            <img className="card-img-top" onClick={() => fetchDogPhoto(el.race, el.id)} src={el.photo}/>
            <div className="card-body">
                <h5 className="card-title" value={el.name}>{el.name}</h5>
                <p className="card-text">{el.age} years old</p> 
                <p className="card-text">{el.race}</p>
                <DogFood testProps={el.id} fetchDogFood={fetchDogFood}/>
                <VetVisit testProps={el.id} fetchVet={fetchVet}/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#vetNumber"+ el.id}>Vet Visit</button>
                    <button className="btn btn-warning" type="button" data-toggle="collapse" data-target={"#feedNumber"+ el.id}style={{ display: "block" }}>Feed!</button>
                    <button className="btn btn-danger" type="button" onClick={()=> handleDelete(el.id)}>Delete</button>
                </div>
            </div>
        </div>
        )}
    </div>
)
}

export default showYourDogs
