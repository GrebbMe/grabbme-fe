import React, { useState } from 'react';
import * as S from '@/shared/ui/textfield/TextField.style';

export type TextFieldSize = 'sm' | 'md' | 'lg';

export interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  size: TextFieldSize;
}

const MAX_LENGTH = 50;

const TextField = ({ value, onChange, size, placeholder }: TextFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    if (newValue.length <= MAX_LENGTH) {
      onChange(newValue);
    }
  };

  return (
    <S.Container size={size}>
      <S.Header>
        <S.Label>
          게시글 제목<S.StarWrapper>*</S.StarWrapper>
        </S.Label>
        <S.CharCount>
          {value.length} / {MAX_LENGTH}
        </S.CharCount>
      </S.Header>
      <S.Input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        $hasValue={value.length > 0}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default TextField;
