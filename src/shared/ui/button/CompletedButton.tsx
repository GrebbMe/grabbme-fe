import { StyledButton } from '@/shared/ui/button/completedButton.style';

export interface CompletedButtonProps {
  variant: 'apply' | 'recruit';
}

const completedVariant = {
  apply: '신청 완료',
  recruit: '모집 완료',
};

export const CompletedButton = ({ variant }: CompletedButtonProps) => {
  return <StyledButton variant={variant}>{completedVariant[variant]}</StyledButton>;
};
