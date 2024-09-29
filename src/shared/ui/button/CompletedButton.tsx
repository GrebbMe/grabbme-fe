import { StyledButton } from '@/shared/ui/button/completedButton.style';
export interface CompletedButtonProps {
  variant: 'apply' | 'recruit';
}

export const CompletedButton = ({ variant }: CompletedButtonProps) => {
  return (
    <StyledButton variant={variant}>{variant === 'apply' ? '신청 완료' : '모집 완료'}</StyledButton>
  );
};
