import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './Navbar/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Buy from './components/Buy';
function App() {
  return (
    <Router>
     
      <div className="App">
     <Navbar/>
        <header className="App-header"> 
          <h1>
            <span className='imgspan'>

              <img src="images/" alt="" className='basketimage' />
            </span>
             NEXT <b className='text-danger'>DREAM</b> -Buy your drinks online 
            </h1>
        </header>
        <br />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Buy' element={<Buy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


