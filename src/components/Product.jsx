import React from 'react';
import { useCart } from './CartContext';

const Product = ({ item }) => {
  const { addToCart, isLoading, message } = useCart();

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add to Cart'}
      </button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default Product;
