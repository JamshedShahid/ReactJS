import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import UseEFFEct from './UseEFFEct';
import UseEffectpart2 from './UseEffectpart2';
import Maps from './Maps';
import NstedARaays from './NstedARaays';
// import User from './User';
// import Members from './Members';

function App() {
  const [data,setData] =useState("Jamshed")

  // function getData(){
  //   alert("hello world")
  // }


  return (
    <div className="App">
      <h1>props to function {data}</h1>
      <button onClick={()=>setData("jimmi")}>update</button>
      

     <NstedARaays />

      
    </div>
  );
}

export default App;
