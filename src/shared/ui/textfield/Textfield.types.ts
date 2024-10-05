export type TextFieldSize = 'sm' | 'md' | 'lg';

export interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  size?: TextFieldSize;
}
