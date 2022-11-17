import React, { useEffect, useState } from 'react'

function LifeCycleFunc() {
    const[name, setName] = useState("")
    const[isUpdate, setUpdate] = useState(false)

    // component did mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            setName(json.name)
        });
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            setUpdate(true)
        });
    }

    // component did update
    useEffect(() => {
        if(isUpdate){
            alert("sukses")
            setUpdate(false)
        }
    }, [isUpdate])

    // component will unmount
    useEffect(() =>{
        return() => {
            console.log("component diubah")
        }
    })

  return (
    <div>
        <h3>
                name: {name}
        </h3>
        <hr />
         <h3>update name: </h3>
         <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder="masukan nama" name="name" 
            onChange={(event) => setName( event.target.value)}/>
            <button type="submit">Submit</button>
         </form>
    </div>
  )
}

export default LifeCycleFunc