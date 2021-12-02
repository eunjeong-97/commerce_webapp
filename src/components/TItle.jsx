import React from 'react';
import styled from 'styled-components';

const TItle = props => {
  const { text } = props;
  return <TitleBox>{text}</TitleBox>;
};

const TitleBox = styled.span`
  font-family: 'Noto Scans CJK KR';
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
`;

export default TItle;
