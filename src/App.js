import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Makepayment from './components/Makepayment';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"> 
          <h1>
            <span className='imgspan'>

              <img src="images/" alt="" className='basketimage' />
            </span>
             NEXT <b className='text-danger'>DREAM</b> -Buy your drinks online 
            </h1>
        </header>
        <br />
        <nav>
          <Link to= '/Signup' className='btn btn-dark mx-2 px-5'>signup </Link>
          <Link to = '/Signin' className='btn btn-dark mx-2 px-5'> signin</Link>
          <Link to ='/' className='btn btn-dark mx-2 px-5'> Home</Link>
     
        </nav>
        <Routes>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Makepayment' element={<Makepayment/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


