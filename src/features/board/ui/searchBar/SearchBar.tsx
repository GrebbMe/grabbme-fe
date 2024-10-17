import { useSearch } from '@/features/board/hooks/useSearch';
import * as S from '@/features/board/ui/searchBar/SearchBar.style';
import { IcSearch } from '@/shared/assets';

const SearchBar = () => {
  const { query, handleQueryChange, handleSearch } = useSearch();

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
