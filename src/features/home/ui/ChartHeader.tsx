import {
  ChartHeaderContainer,
  DateContainer,
  HeaderDescription,
  HeaderTitle,
  IcArrow,
  YearMonth,
} from './chartHeader.style';
import { IcArrowNext, IcArrowPrev } from '@/shared/assets/svg/index';

const ChartHeader = () => {
  return (
    <ChartHeaderContainer>
      <div className="title-container">
        <HeaderTitle>최근 인기 스택</HeaderTitle>
        <HeaderDescription>
          GrabbMe에서 가장 많이 지원하는 인기있는 개발 스택을 확인해보세요.
        </HeaderDescription>
      </div>
      <DateContainer>
        <IcArrow src={IcArrowPrev.toString()} alt="prev arrow icon" />
        <YearMonth>2024년 10월</YearMonth>
        <IcArrow src={IcArrowNext.toString()} alt="next arrow icon" />
      </DateContainer>
    </ChartHeaderContainer>
  );
};

export default ChartHeader;
