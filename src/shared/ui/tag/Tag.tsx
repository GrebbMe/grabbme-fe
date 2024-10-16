import React from 'react';
import { Container } from '@/shared/ui/tag/Tag.style';

interface TagProps {
  children: React.ReactNode;
}
const Tag = ({ children }: TagProps) => {
  return <Container>{children}</Container>;
};

export default Tag;
