import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Componaenst/Home';
import About from './Componaenst/About';
import Navbar from './Componaenst/Navbar';
import User from './Componaenst/User';
import Filter from './Componaenst/Filter';
import Contect from './Componaenst/Contect';
import Company from './Componaenst/Company';
import Channel from './Channel';
import Other from './Other';
import Login from './Componaenst/Login';
import Protected from './Componaenst/Protected';


function App() {
  return (
    <div className="App">



      <BrowserRouter>

        <Navbar />

        <Routes>


          <Route path='/' element={<Protected Components={Home} />}   />
          <Route path='/about' element={<About />} />

          <Route path='/users/names' element={<User />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/login' element={<Login />} />



          <Route path='/contect/' element={<Contect />}>


           <Route path='company'  element={<Company />}/>
            <Route path='Chaneel'element={<Channel />} />
            <Route path='other'element={<Other/>} />


          </Route>




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
