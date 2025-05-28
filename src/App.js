import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Buy from './components/Buy';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import MainLayout from './layouts/Mainlayout';
import Welcomepage from './pages/Welcomepage';


function App() {
  return (
    <div className="App">
    


      <Routes>
        <Route path="/" element={<Welcomepage />} />

        {/* Wrap routes with MainLayout if needed */}
        <Route element={<MainLayout />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Mainpage" element={<Mainpage />} />
        </Route>
       
      </Routes>
    

    </div>
  );
}

export default App;
