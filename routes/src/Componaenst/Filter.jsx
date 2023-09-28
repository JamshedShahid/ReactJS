import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [serch,setSeacrh] = useSearchParams()
    console.log(serch.get('age'))
    console.log(serch.get('city'))
  const age = serch.get('age')
  const city = serch.get('city')


  return (
    <div>
     <h1>
        Hello filter
     </h1>
     <h1>{age}</h1>
     <h1>{city}</h1>

     <input type="text" onChange={(e)=>setSeacrh({text:e.target.value})} />

     <button onClick={()=>setSeacrh({age:30})}>set age in query</button>
    </div>
  )
}

export default Filter
