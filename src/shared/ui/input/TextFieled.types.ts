export type TextFieldSize = 'sm' | 'md' | 'lg';

export interface TextFieldProps {
  label: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  size?: TextFieldSize;
}
