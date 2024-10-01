export interface ButtonProps {
  state: 'default' | 'clicked';
  content: string;
  size: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
