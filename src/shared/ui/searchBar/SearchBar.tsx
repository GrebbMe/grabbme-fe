import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  box-shadow: 0rem 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  border-radius: 10rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  width: 80.8rem;
  height: 6.4rem;
`;

const SearchBar = () => {
  return <Container></Container>;
};

export default SearchBar;
