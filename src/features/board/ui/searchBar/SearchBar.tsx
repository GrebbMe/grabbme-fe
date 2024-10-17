import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '@/features/board/ui/searchBar/SearchBar.style';
import { IcSearch } from '@/shared/assets';

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const currentPath = location.pathname;
    if (currentPath === '/') {
      navigate(`/project?search=${query.replace(/\s+/g, '+')}`);
    } else {
      navigate(`${currentPath}?search=${query.replace(/\s+/g, '+')}`);
    }
  };
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <S.Container>
      <S.FormWrapper onSubmit={handleSearch}>
        <S.SearchInput
          value={query}
          onChange={handleQueryChange}
          placeholder="관심있는 스택이나 선호하는 주제를 검색해보세요."
        />
        <S.SearchButton type="submit">
          <IcSearch />
        </S.SearchButton>
      </S.FormWrapper>
    </S.Container>
  );
};

export default SearchBar;
