import React, { useState } from 'react';
import './Cart.css';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [visible, setVisible] = useState(false);

  const toggleViewer = () => setVisible(!visible);

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <div className="cart-button" onClick={toggleViewer}>🛒</div>

      {visible && (
        <div className="cart-viewer">
          <h3>Your Cart</h3>
          <ul>
            {cartItems.length === 0 ? (
              <li>Your cart is empty.</li>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))
            )}
          </ul>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <p><strong>Total:</strong> ${calculateTotal()}</p>
              <button className="checkout-button" onClick={() => alert('Proceeding to checkout...')}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
