import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {


 const location =useLocation()

 console.log(location)













  // const navigate = useNavigate()

  // const navTo= ()=>{
  //   let x = true
  //   if(x){
  //     navigate("/about")

  //   }else{
  //     navigate('/filter')
  //   }
  // }


  return (
    <div>
      <h1>Hello Home</h1>
      {/* <button onClick={()=>navigate('/about')}>Go To Home Page</button> <br />
      <br /><br />
      <button onClick={()=>navigate('/filter')}>Go To About Page</button> */}

<br /> 
      {/* <button onClick={()=>navTo()}>Go To Home Page</button> <br />
      <br /><br />
      <button onClick={()=>navTo()}>Go To About Page</button> */}


      

    </div>
  )
}

export default Home
