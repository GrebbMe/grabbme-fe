import React, { useState } from 'react';
import { CharCount, Container, Header, Input, Label } from '@/shared/ui/input/TextFiled.style';
import { TextFieldProps, TextFieldSize } from '@/shared/ui/input/TextFiled.types';

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
    <Container size={size}>
      <Header>
        <Label>{label}</Label>
        <CharCount>
          {text.length} / {MAX_LENGTHS[size]}
        </CharCount>
      </Header>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTHS[size]}
        hasValue={text.length > 0}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextField;
