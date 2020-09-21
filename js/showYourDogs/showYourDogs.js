import React from 'react'

function showYourDogs({ myDogProp }) {
    
    console.log(myDogProp)

    return (
        <div>
            {myDogProp.map((el, index) => <div key={index}><p value={el.name}> Dog name: {el.name}</p><p>Dog race: {el.race} </p></div>)}
        </div>
    )
}

export default showYourDogs
