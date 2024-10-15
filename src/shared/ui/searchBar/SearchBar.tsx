import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcSearch } from '@/shared/assets';
import * as S from '@/shared/ui/searchBar/SearchBar.style';

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
    <S.Container>
      <S.Wrapper>
        <S.SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="관심있는 스택이나 선호하는 주제를 검색해보세요."
        />
        <IcSearch onClick={handleSearch} />
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchBar;
