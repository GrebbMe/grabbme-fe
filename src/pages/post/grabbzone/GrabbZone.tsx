import React from 'react';
import { styled } from 'styled-components';
import SearchBar from '@/shared/ui/searchBar/SearchBar';
import StackList from '@/shared/ui/stackList/StackList';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / -1;
`;

const GrabbZone = () => {
  return (
    <>
      <Container>
        <SearchBar />
      </Container>
      <Container>
        <StackList />
      </Container>
    </>
  );
};

export default GrabbZone;
