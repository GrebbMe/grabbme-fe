import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { IcPrev, IcNext } from '@/features/board/assets';
import * as S from '@/features/board/ui/pagination/Pagination.style';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const location = useLocation();
  const [startPage, setStartPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(location);
  const currentPage = Number(searchParams.get('page'));
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (startPage !== 1) {
      setStartPage(startPage - 5);
    }
    navigate(`?page=${startPage - 1}`);
    handleScrollToTop();
  };

  const handleNext = () => {
    if (startPage + 5 <= totalPages) {
      setStartPage(startPage + 5);
    }
    navigate(`?page=${startPage + 5}`);
    handleScrollToTop();
  };

  return (
    <S.Container>
      <S.PrevButton onClick={handlePrevious} disabled={startPage === 1}>
        <IcPrev />
      </S.PrevButton>
      <S.LinkWrapper>
        {[0, 1, 2, 3, 4].map((count) => (
          <React.Fragment key={startPage + count}>
            {startPage + count <= totalPages && (
              <S.PageLink
                $isCurrent={currentPage === startPage + count}
                to={`?page=${startPage + count}`}
                onClick={() => handleScrollToTop()}
              >
                {startPage + count}
              </S.PageLink>
            )}
          </React.Fragment>
        ))}
      </S.LinkWrapper>
      <S.NextButton onClick={handleNext} disabled={startPage + 5 > totalPages}>
        <IcNext />
      </S.NextButton>
    </S.Container>
  );
};

export default Pagination;
