import styled from 'styled-components';

export const ProfileDetailContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ProfileDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  align-self: stretch;
`;

export const SectionTitle = styled.span`
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  color: ${({ theme }) => theme.color.BLACK_80};
  align-self: stretch;
`;

export const SectionContent = styled.div`
  display: flex;
  width: 80.8rem;
  height: 4.8rem;
  padding: 1.4rem 1.6rem;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.BLACK_80};
  background-color: ${({ theme }) => theme.color.BLUE_30};
`;

export const TagContent = styled.div`
  display: flex;
  width: 80.8rem;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 0.8rem;
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.BLACK_80};
  background-color: ${({ theme }) => theme.color.BLUE_30};
`;
