import React, { useState } from 'react'

function Users() {
    const [data, setData] = useState(false)

    function names() {
        setData(!data)
    }

    // function apple()
    // {
    //     // alert(setData)
    //     setData(data+1)
    // }
    // console.log("------------")
    return (
        <div>
            {/* <h1>{data}</h1>
     <button onClick={apple}>Click me</button> */}


            {data ? <div>Jimmi</div> : <div>Jamshed</div>}
            <button onClick={names}>Click me</button>

        </div>
    )
}

export default Users
