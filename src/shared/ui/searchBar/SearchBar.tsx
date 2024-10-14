import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcSearch } from '@/shared/assets';

export const Container = styled.div`
  box-sizing: border-box;
  box-shadow: 0rem 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  border-radius: 10rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  width: 80.8rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  padding: 0 3.2rem 0 4rem;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) => theme.device.MOBILE} {
    width: 100%;
    height: 4.8rem;
    padding: 0 1.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};

  svg {
    cursor: pointer;
  }

  ${({ theme }) => theme.device.MOBILE} {
   svg{
   width: 2.4rem;
   height: 2.4rem;v}
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.typo.SUBTITLE_20}
  color: ${({ theme }) => theme.color.BLACK_100};
  width: 100%;
  flex-grow: 1;
  outline: none;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.GRAY_50};
  }

  ${({ theme }) => theme.device.MOBILE} {
    ${({ theme }) => theme.typo.CAPTION_14}
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    const currentPath = location.pathname;
    if (currentPath !== '/grabbzone') {
      navigate(`/project?page=1&search=${query.replace(/\s+/g, '+')}`);
    } else {
      navigate(`/grabbzone?page=1&search=${query.replace(/\s+/g, '+')}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Wrapper>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="관심있는 스택이나 선호하는 주제를 검색해보세요."
        />
        <IcSearch onClick={handleSearch} />
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
