import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycarosel from '../carosel/Mycarosel';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const img_url = 'https://eguman.pythonanywhere.com/static/images/';
  const navigate = useNavigate();

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://eguman.pythonanywhere.com/api/get_products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container-fluid'>
      <h3>Explore Products Available</h3>

      <Mycarosel />

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
                <img
                  src={img_url + product.product_photo}
                  className='img-product mt-4'
                  alt={product.product_name}
                />
                <div className='card-body'>
                  <h5 className='mt-2'>{product.product_name}</h5>
                  <p className='text-muted'>{product.product_description}</p>
                  <b className='text-warning'>{product.product_cost}</b>
                  <br />
                  <button
                    className='btn btn-success mt-2 w-100'
                    onClick={() => navigate('/Buy', { state: { product } })}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
