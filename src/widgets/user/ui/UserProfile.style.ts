import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2.4rem;
`;

export const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileIcon = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const NameLabel = styled.span`
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const EmailLabel = styled.span`
  ${({ theme }) => theme.typo.BODY_MEDIUM};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

export const SignoutButton = styled.button`
  color: ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.GRAY_50};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
`;
