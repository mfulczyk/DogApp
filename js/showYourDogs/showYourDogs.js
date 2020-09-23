import React from 'react'

function showYourDogs({ myDogProp, handleDelete }) {
    
    


 
    return (
        <div>
            {myDogProp.map((el, index) => 
            <div key={index}>
                <p value={el.name}> Dog name: {el.name}</p>
                <p>Dog age: {el.age}</p> 
                <p>Dog race: {el.race} </p>
                <button class="btn btn-info">Feed</button>
                <button class="btn btn-danger" onClick={()=> handleDelete(el.id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default showYourDogs
