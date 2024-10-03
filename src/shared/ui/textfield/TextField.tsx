import React, { useState } from 'react';
import * as S from '@/shared/ui/textfield/TextField.style';
import { TextFieldProps, TextFieldSize } from '@/shared/ui/textfield/Textfield.types';

const MAX_LENGTHS: { [key in TextFieldSize]: number } = {
  sm: 20,
  md: 30,
  lg: 50,
};

const TextField = ({ label, value, onChange, size = 'lg', placeholder = '' }: TextFieldProps) => {
  const [text, setText] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    if (newValue.length <= MAX_LENGTHS[size]) {
      setText(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <S.Container size={size}>
      <S.Header>
        <S.Label>{label}</S.Label>
        <S.CharCount>
          {text.length} / {MAX_LENGTHS[size]}
        </S.CharCount>
      </S.Header>
      <S.Input
        type="text"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTHS[size]}
        hasValue={text.length > 0}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default TextField;
