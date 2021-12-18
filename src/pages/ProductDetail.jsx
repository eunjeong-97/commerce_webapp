import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import dotenv from 'dotenv'

import Nav from '../components/Nav'

const ProductDetail = props => {
  const [productDetail, setProductDetail] = useState({})
  dotenv.config()
  function getProductDetail() {
    axios
      .get(`${process.env.REACT_APP_COMMERCE_SERVER_URL}product/1`)
      .then(response => setProductDetail(response.data.results))
  }

  useEffect(getProductDetail, [])
  console.log(productDetail)

  return (
    // <div className="ProductDetail">
    //   <li>
    //     <Link to="/">ProductList</Link>
    //   </li>
    //   <li>
    //     <Link to="/productDetail">ProductDetail</Link>
    //   </li>
    //   <li>
    //     <Link to="/cart">Cart</Link>
    //   </li>
    //   <p>Current Page is ProductDetail</p>
    // </div>
    <ProductDetailBox>
      <Nav />
    </ProductDetailBox>
  )
}

const ProductDetailBox = styled.div`
  width: 390px;
`

export default ProductDetail
