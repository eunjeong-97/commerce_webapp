import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { url } from '../apis/config';
import Title from '../components/TItle';
import Nav from '../components/Nav';
import ProductItem from '../components/ProductItem';

const ProductList = props => {
  const [popularThemeArray, setPopularThemeArray] = useState([]);
  const [productList, setProductList] = useState([]);

  const getPopularTheme = () => {
    axios
      .get(`${url}/theme/popular`)
      .then(response => setPopularThemeArray(response.data.results));
  };

  const getProcuctList = themeIndex => {
    axios
      .get(`${url}/theme/${themeIndex + 1}/products`)
      .then(response => setProductList(response.data.results));
  };

  useEffect(getPopularTheme, []);

  console.log(productList);

  return (
    <Whole>
      <Nav />
      <ProductListBox>
        <ThemeTitleBox>
          <Title text="인기 테마" />
        </ThemeTitleBox>
        <ThemeListBox>
          {popularThemeArray.length > 0 && (
            <SliderWholeBox>
              {popularThemeArray.map((popularTheme, popularThemeIndex) => {
                return (
                  <SliderItemBox
                    key={popularThemeIndex}
                    onClick={getProcuctList(popularThemeIndex)}
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${popularTheme.theme_thumbnail})`,
                    }}
                  >
                    <Title text={`#${popularTheme.theme_name}`} />
                  </SliderItemBox>
                );
              })}
            </SliderWholeBox>
          )}
        </ThemeListBox>
        <ProductItem />
      </ProductListBox>
    </Whole>
  );
};

const Whole = styled.div`
  width: 390px;
  background-color: wheat;
`;

const ProductListBox = styled.div`
  margin: 0 24px 52px 24px;
  background-color: teal;
`;
const ThemeTitleBox = styled.div`
  margin: 27px 0 15px 0;
`;

const ThemeListBox = styled.div`
  overflow-x: scroll;
`;

const SliderWholeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 480px;
  margin-bottom: 40px;
`;

const SliderItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 75px;
  margin-left: 10px;
  border-radius: 10px;
  background-size: contain;
  color: white;
  border: 1px solid black;
`;
export default ProductList;
