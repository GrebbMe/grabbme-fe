import { useState } from 'react';
import bookmark from '@/shared/assets/bookmark.svg';
import { StyledButton, ClickedStyledButton } from '@/shared/ui/button/bookmarkButton.style';

export const BookmarkButton = () => {
  const [isBookMarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <>
      {isBookMarked ? (
        <ClickedStyledButton onClick={handleClick}>
          <img src={bookmark} />
          북마크
        </ClickedStyledButton>
      ) : (
        <StyledButton onClick={handleClick}>
          <img src={bookmark} />
          북마크
        </StyledButton>
      )}
    </>
  );
};
