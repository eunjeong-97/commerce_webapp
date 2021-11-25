import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = props => {
  return (
    <div className="ProductDetail">
      <li>
        <Link to="/">ProductList</Link>
      </li>
      <li>
        <Link to="../productDetail">ProductDetail</Link>
      </li>
      <li>
        <Link to="../cart">Cart</Link>
      </li>
      <p>Current Page is ProductDetail</p>
    </div>
  );
};

export default ProductDetail;
