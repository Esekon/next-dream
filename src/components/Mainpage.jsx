import 'bootstrap/dist/css/bootstrap.min.css';
import cocacolahomeimg1 from '../static/images/cocacolahomeimg1.jpeg'
import donjuliohomeimg1 from '../static/images/donjuliohomeimg1.jpeg'
import waterhomeimg1 from '../static/images/waterhomeimg1.jpeg'
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import '../components/Mainpage.css'

import { Navigate, Routes, useNavigate,Route } from 'react-router-dom';

const MainPage = () => {
const navigate =useNavigate();
  return (
    <>  <Routes>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Signin' element={<Signin/>}/>
        </Routes>
        <div className="bg-dark text-light">
          <div className="row product-row">
              <div className="col-md-6">
                  <img
                      src={cocacolahomeimg1}
                      alt="CocaCola Bottle" />
              </div>
              <div className="col-md-6">
                  <h3>CocaCola Classic</h3>
                  <p>
                      CocaCola is a timeless classic known for its bold flavor and refreshing fizz.
                      Enjoyed around the world for over a century, it's the perfect drink to energize your day or complement your meal.
                  </p>
                  <br />
                  <button
                      onClick={() => navigate('/Home', { state: {} })}
                      className='bg-light text-danger btn-outline-danger
                      classy-button'>Explore Products</button>
              </div>
          </div>

          {/* Card 2 - Bottled Water */}
          <div className="row align-items-center product-row">
              <div className="col-md-6 ">
                  <h3>Pure Bottled Water</h3>
                  <p>
                      Stay hydrated with our premium bottled water. Filtered for purity and packed with essential minerals,
                      it's the healthy and crisp choice for your everyday refreshment needs.
                  </p>
                  <br />
                  <button
                      onClick={() => Navigate('/Home', { state: { Home } })}
                      className='bg-light text-danger btn-outline-danger
                      classy-button'>Explore Products</button>
              </div>
              <div className="col-md-6 ">
                  <img
                      src={waterhomeimg1}
                      alt="Bottled Water" />


              </div>
          </div>

          {/* card 3 */}
          <div className="row align-items-center product-row">
              <div className="col-md-6">
                  <img
                      src={donjuliohomeimg1}
                      alt="Don julio" />
              </div>
              <div className="col-md-6">
                  <h3>Liqoursource</h3>
                  <p>
                      Don Julio is a premium tequila brand renowned for its smooth, refined taste and commitment to craftsmanship. Distilled in the highlands of Jalisco, Mexico, Don Julio uses hand-selected blue agave plants, slow roasting, and traditional methods to create a spirit that balances richness with a clean, crisp finish.Experience Don julio with us!!
                  </p>
                  <br />
                  <button
                      onClick={() => Navigate('/Home', { state: { Home } })}
                      className='bg-light text-danger btn-outline-danger
                      classy-button '>Explore Products</button>
              </div>
          </div>
  
      </div></>
  );
};

export default MainPage;
