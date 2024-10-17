import * as S from './Search.style';
import { IcSubmit } from '@/features/home/assets';

const Search = () => {
  return (
    <S.SearchContainer>
      <S.Title>오늘도 새로운 기회를 잡아보세요!</S.Title>
      <S.SearchBox>
        <S.InputBox placeholder={`관심있는 주제를 검색해보세요.`} />
        <S.Submit src={`${IcSubmit}`} />
      </S.SearchBox>
    </S.SearchContainer>
  );
};

export default Search;
