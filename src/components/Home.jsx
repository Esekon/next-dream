import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycarosel from '../carosel/Mycarosel';
import './Home.css';
import Makepayment from './Makepayment';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const img_url = 'https://eguman.pythonanywhere.com/static/images/';
  const navigate = useNavigate();

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

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
    });
  };

  const toggleCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
    });
  };

  const moveToCart = (product) => {
    toggleWishlist(product);
    toggleCart(product);
  };

  const totalWishlistPrice = wishlist.reduce((acc, item) => acc + parseFloat(item.product_cost), 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + parseFloat(item.product_cost), 0);

  return (
    <div className="home-container container-fluid">
      <div className="section-header text-center mb-4">
        <h3 className="text-danger"> Explore Products Available</h3>
      </div>

      <Mycarosel />

      <div className="search-bar my-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="floating-buttons">
        <button
          className="btn btn-danger rounded-circle wishlist-button"
          onClick={() => setShowWishlist(!showWishlist)}
        >
          ❤️
        </button>
        <button
          className="btn btn-dark rounded-circle cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          🛒
        </button>
      </div>

      <div className="row">
        {products.filter(product => product.product_name.toLowerCase().includes(searchTerm.toLowerCase())).map((product, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="product-card card h-100 shadow-sm">
              <img
                src={img_url + product.product_photo}
                className="card-img-top product-img"
                alt={product.product_name}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="product-title">{product.product_name}</h5>
                  <p className="text-muted small">{product.product_description}</p>
                  <p className="product-cost">💰 {product.product_cost}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    className={`btn ${wishlist.some(item => item.id === product.id) ? 'btn-warning' : 'btn-outline-warning'}`}
                    onClick={() => toggleWishlist(product)}
                  >
                    ❤️
                  </button>
                  <button
                    className={`btn ${cart.some(item => item.id === product.id) ? 'btn-success' : 'btn-outline-success'}`}
                    onClick={() => toggleCart(product)}
                  >
                    🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showWishlist && (
        <div className="floating-panel wishlist-panel">
          <h4>Your Wishlist ❤️</h4>
          {wishlist.length === 0 ? <p>No items in wishlist.</p> : wishlist.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <img src={img_url + item.product_photo} alt={item.product_name} width="50" height="50" />
              <span>{item.product_name}</span>
              <span>💰 {item.product_cost}</span>
              <button className="btn btn-sm btn-outline-success" onClick={() => moveToCart(item)}>
                Move to Cart
              </button>
            </div>
          ))}
          <p className="mt-3"><strong>Total: 💰 {totalWishlistPrice.toFixed(2)}</strong></p>
        </div>
      )}

      {showCart && (
        <div className="floating-panel cart-panel">
          <h4>Your Cart 🛒</h4>
          {cart.length === 0 ? <p>No items in cart.</p> : cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <img src={img_url + item.product_photo} alt={item.product_name} width="50" height="50" />
              <span>{item.product_name}</span>
              <span>💰 {item.product_cost}</span>
            </div>
          ))}
          <p className="mt-3"><strong>Total: 💰 {totalCartPrice.toFixed(2)}</strong></p>
          <button className="btn btn-success w-100 mt-2"
            onClick={() => (Makepayment)}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Home;
