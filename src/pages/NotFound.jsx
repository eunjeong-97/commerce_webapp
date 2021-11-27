import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404 Not Found</h1>
      <h1>아래 페이지로 이동하시오</h1>
      <li>
        <Link to="">ProductList</Link>
      </li>
      <li>
        <Link to="/productDetail">ProductDetail</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </div>
  );
};

export default NotFound;
