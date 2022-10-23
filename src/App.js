import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Navibar from './Navibar';
import Shop from './Shop';
import About from './About';
import Contactus from './Contactus';
import Cart from './Components/Cart/Cart';



function App() {
  return (<Router>
      <Navibar />
      <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contactus' element={<Contactus />}/>
          <Route path='/cart' element={<Cart />}/>
          
      </Routes>          
    </Router>
  );
}

export default App;