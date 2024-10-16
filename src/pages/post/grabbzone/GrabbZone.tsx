import { styled } from 'styled-components';
import SearchBar from '@/features/search/ui/searchBar/SearchBar';
import StackList from '@/features/search/ui/stackSearch/StackSearch';

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
