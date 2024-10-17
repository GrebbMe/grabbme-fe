import { styled } from 'styled-components';

export const Header = styled.header`
  grid-column: 1/ -1;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 8rem;
  ${({ theme }) => theme.typo.TITLE}
  color:${({ theme }) => theme.color.BLACK_100}
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2.4rem;
  grid-column: 1 / -1;
  flex-direction: column;
`;

export const PostListLabel = styled.div`
  display: flex;
  align-items: center;
  grid-column: 3 / span 8;
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
  justify-content: space-between;
  margin-top: 8rem;
`;

export const PaginationWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
