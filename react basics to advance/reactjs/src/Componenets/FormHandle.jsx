import React, { useState } from 'react'

const FormHandle = () => {

    const [name,SetName]=useState("")
    const [term,setterm]=useState(false)
    const[interet,setinterest]=useState()




    function getformData(e){
        console.log(name,term,interet)
       e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={getformData}>
        <input type="text" name="" onChange={(e)=>SetName(e.target.value)} placeholder='Enter Your Name' id="" /> <br />
        <select onChange={(e)=>setinterest(e.target.value)}>
            <option >Select Option</option>
            <option >Marvel</option>
            <option >Dc</option>

        </select>
        <br /><br />
        <input type="checkbox" onChange={(e)=>setterm(e.target.checked)} />  <span>Accept TErm And Conditions</span> <br /> <br />
        <button type='submit'>Submit</button>
        

      </form>
    </div>
  )
}

export default FormHandle
