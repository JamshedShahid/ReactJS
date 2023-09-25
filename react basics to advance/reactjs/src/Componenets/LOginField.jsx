import React, { useState } from 'react'

const LOginField = () => {

    const[name,setName]=useState("")
    const[pass,setPass]=useState("")
    const[err,setErr]=useState(false)




    function formSubmit(e){


        if(name.length<3 || pass.length<3){
            alert("please fill input field")
        }else{
            alert("done Good :)")
        }
        // alert("heelllo")
        e.preventDefault()
    }

    function userHandler(e){
        let items = e.target.value
        if(items.length<3)
        {
            setErr(true)
        }else{
            setErr(false)
        }
        setName(items)
        // console.log(e.target.value.lenth)
    }



    function handlerPasword(e){
        let items = e.target.value
        if(items.length<3)
        {
            setErr(true)
        }else{
            setErr(false)
        }
        setPass(items)

        // console.log(e.target.value.lenth)
    }


  return (
    <div>
      <h1>Jamhsed</h1>

      <form  onSubmit={formSubmit}>

      <input type="Name" name="" onChange={userHandler} placeholder='Enter Name' id="" /> {err? <span>User Name Unvalid</span>:""}
      <br /><br /><br />

      <input type="Name" name="" onChange={handlerPasword} placeholder='Enter Password' id="" /> {err? <span>User Password Unvalid</span>:""}
      <br /><br /><br />
      <button type='submit'>LOgin</button>
      </form>
    </div>
  )
}

export default LOginField
