
import { useState } from 'react';
import './App.css';
import LOginField from './Componenets/LOginField';

// import Props from './Componenets/Props';
// import Users from './Componenets/Users';
// import Input from './Componenets/Input';
// import HideShow from './Componenets/HideShow';
// import FormHandle from './Componenets/FormHandle';
// import Profile from './Componenets/Profile';
// import Login from './Componenets/login';


function App() {

  // const [name,setName]=useState("jimmi")
  return (
    <div className="App">
    <h2>hello world</h2>
    {/* <Users />  
    <Input />
    <HideShow />
    <FormHandle /> */}
    {/* <Props  name={name} email={"jamshed@gmail.com"}/> */}
    {/* <Props  name={"shahid"} email={"jamshed@gmail.com"}/> */}
    {/* <Props  name={"Talha"} email={"jamshed@gmail.com"}/> */}


    {/* <button onClick={()=>{setName("jamshedssss")}}>Change</button> */}

    {/* <Profile /> */}
    <LOginField />

    </div>
  );
}

export default App;
