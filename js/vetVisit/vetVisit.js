import React, {useState} from 'react'

function vetVisit({testProps, fetchVet}) {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const [vetValues, setVetValues] = useState({vetDescription: ""})


    const handleVet = (e) => {
       
        e.preventDefault();
        const id = testProps
        const newVetValues = {
            vet:
            {
                date: date,
                time: time,
                vetDescription: vetValues.vetDescription,
            }
        }

        fetchVet(id, newVetValues)
    }

    return (
        
         
         <form className="test collapse" id={"vetNumber" + testProps} onSubmit={handleVet}>
             <input className="form-control" onChange={e => setVetValues({ vetDescription: e.target.value })} value={vetValues.vetDescription} placeholder="Visit description">

             </input>
             <button className="btn btn-secondary" >Submit Visit</button>
         </form>   
        
    )
}

export default vetVisit
