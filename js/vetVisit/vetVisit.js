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
        <>
         <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample">Vet Visit</button>
         <form className="test" id="collapseExample" onSubmit={handleVet}>
             <input onChange={e => setVetValues({ vetDescription: e.target.value })} value={vetValues.vetDescription} placeholder="Visit description">

             </input>
             <button>Submit Visit</button>
         </form>   
        </>
    )
}

export default vetVisit
