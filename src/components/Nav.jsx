import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TItle from './TItle';

const Nav = props => {
  return (
    <NavLayout>
      <Link to="/">
        <TItle text="코멘토 쇼핑" />
      </Link>
    </NavLayout>
  );
};

const NavLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 64px;
  margin: auto;
  border-bottom: 1px solid #eeeeee;
  background-color: tomato;
`;

export default Nav;
