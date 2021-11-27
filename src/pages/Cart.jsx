import React from 'react';
import { Link } from 'react-router-dom';

const Cart = props => {
  return (
    <div className="Cart">
      <li>
        <Link to="">ProductList</Link>
      </li>
      <li>
        <Link to="/productDetail">ProductDetail</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <p>Current Page is Cart</p>
    </div>
  );
};

export default Cart;
