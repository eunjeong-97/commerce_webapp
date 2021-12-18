import React from 'react'
import styled from 'styled-components'

const ProductItem = ({ productItem }) => {
  const { product_thumbnail, product_name, product_description } = productItem
  return (
    <ProductItemBox>
      <ProductThumbnail
        style={{ backgroundImage: `url(${product_thumbnail})` }}
      />
      <ProductName>{product_name}</ProductName>
      <ProductDescription>{product_description}</ProductDescription>
    </ProductItemBox>
  )
}

const ProductItemBox = styled.div`
  margin: 21px 0;
`

const ProductThumbnail = styled.div`
  height: 240px;
  background-size: cover;
  border: none;
`

const ProductName = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-weight: 700;
  margin: 15px 0 10px 0;
`

const ProductDescription = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-weight: 400;
`

export default ProductItem
