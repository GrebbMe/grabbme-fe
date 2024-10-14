import React from 'react';
import { Container } from '@/shared/ui/tag/Tag.style';

interface TagProps {
  children: string;
}
const Tag = ({ children }: TagProps) => {
  return <Container>{children}</Container>;
};

export default Tag;
