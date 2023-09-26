import React, { useEffect, useState } from 'react'

const UseEFFEct = () => {
    const [count,setCount]=useState(0)
    useEffect(() => {
        console.log("useEffect")
    })
    return (
        <div>
            <h1>
                helllo {count}
            </h1>
            <button onClick={()=>setCount(count+1)}>Update</button>

        </div>
    )
}

export default UseEFFEct
