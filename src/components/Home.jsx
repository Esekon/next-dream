
import  {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycarosel from '../carosel/Mycarosel';
import Navbar from '../Navbar/Navbar';
import './Home.css'; 
import OrderSection from '../components/Personals';
import AboutUs from '../components/Aboutus';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Product from './Product';  

<Navbar/>
const Home = () => {
  const [products] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const img_url = 'https://eguman.pythonanywhere.com/static/images/';
  const navigate = useNavigate();
  const [Cart, setCart] = useState([
    { name: 'Item 1', quantity: 2, price: 9.99 },
    { name: 'Item 2', quantity: 1, price: 14.99 }
  ]);
  
  

  
  // Function to handle search

  const filteredProducts = products.filter((product) =>

    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())

  );



  return (

    <div className='container-fluid'>

      <h3>Explore Products Available</h3>
      
      <Mycarosel/>

      <input

        type='text'
        className='form-control mb-3'
        placeholder='Search for a product...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />

      <div className='row'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className='col-md-3 mb-4' key={index}>
              <div className='card shadow card-margin'>
                <img src={img_url + product.product_photo} className='card-img img-product mt-4' alt={product.product_photo} />
                <div className='card-body'>
                  <h5 className='mt-2'>{product.product_name}</h5>

                  <p className='text-muted'>{product.product_description}</p>

                  <b className='text-warning'>{product.product_cost}</b><br />

            
                    
                  <button
                    className='btn btn-success mt-2 w-100'
                    onClick={() => navigate('/Buy', { state: { product } })}
                  >
                    purchase now

                  </button>
                      <CartProvider>
                        <div style={{ padding: '20px' }}>
                          <h1>My Store</h1>
                          <div style={{ display: 'flex' }}>
                            {setCart.map((item, index) => (
                              <Product key={index} item={item} />
                            ))}
                          </div>
                        </div>

                        <Cart />
                      </CartProvider>
                </div>
              </div>
            </div>

          ))

        ) : (

          <p className='text-center'>No products found.</p>

        )}

      </div>
      <AboutUs/>
      <OrderSection/>
     

    </div>

  );



}

export default Home;

