import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {
  return (
    <div className="ProductList">
      <li>
        <Link to="">ProductList</Link>
      </li>
      <li>
        <Link to="/productDetail">ProductDetail</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <p>Current Page is ProductList</p>
    </div>
  );
};

export default ProductList;
