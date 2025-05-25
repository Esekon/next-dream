import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Buy from './components/Buy';
import Mainpage from './components/Mainpage';
import MainLayout from './layouts/Mainlayout';
import Welcomepage from './pages/Welcomepage';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Routes>
   
      <Route path="/" element={<Welcomepage />} />

     
      <Route element={<MainLayout />}>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Mainpage" element={<Mainpage />} />
      </Route>
    </Routes>
  );
}

export default App;
