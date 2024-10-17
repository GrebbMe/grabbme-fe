import {
  PBCount,
  ProgressBarContainer,
  ProgressBarStyle,
  ProgressBarWrapper,
} from '@/shared/ui/progressBar/ProgressBar.style';

interface ProgressBarProps {
  totalCnt: number;
  acceptedCnt: number;
}

export const ProgressBar = ({ totalCnt, acceptedCnt }: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        <ProgressBarStyle value={acceptedCnt} max={totalCnt} />
      </ProgressBarWrapper>
      <PBCount>
        {acceptedCnt}/{totalCnt}
      </PBCount>
    </ProgressBarContainer>
  );
};
