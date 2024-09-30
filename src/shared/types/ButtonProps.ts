export interface ButtonProps {
  img?: string;
  state: 'default' | 'clicked';
  content: string;
  size: string;
  onClick?: () => void;
}
