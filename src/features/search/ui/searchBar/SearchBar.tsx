import * as S from '@/features/search/ui/searchBar/SearchBar.style';
import { IcSearch } from '@/shared/assets';

interface SearchBarProps {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ query, onQueryChange, onSearch }: SearchBarProps) => {
  return (
    <S.Container>
      <S.FormWrapper onSubmit={onSearch}>
        <S.SearchInput
          value={query}
          onChange={onQueryChange}
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
