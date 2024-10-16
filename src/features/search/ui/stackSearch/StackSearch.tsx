import { useStackSearch } from '@/features/search/hooks/useStackSearch';
import { Container } from '@/features/search/ui/stackSearch/StackSearch.style';
import {
  IcNodejs,
  IcReact,
  IcNestjs,
  IcSpring,
  IcDjango,
  IcFlutter,
  IcVue,
  IcRust,
  IcSwift,
  IcKotlin,
} from '@/shared/assets/svg/stack/index';
import { StackBadge } from '@/shared/ui/stackBadge';

const STACKS = [
  { img: `${IcReact}`, name: 'React' },
  { img: `${IcNodejs}`, name: 'Node.js' },
  { img: `${IcNestjs}`, name: 'NestJS' },
  { img: `${IcSpring}`, name: 'Spring' },
  { img: `${IcDjango}`, name: 'Django' },
  { img: `${IcFlutter}`, name: 'Flutter' },
  { img: `${IcVue}`, name: 'Vue' },
  { img: `${IcRust}`, name: 'Rust' },
  { img: `${IcSwift}`, name: 'Swift' },
  { img: `${IcKotlin}`, name: 'Kotlin' },
];

interface StackSearchProps {
  onStackSearch: (stack: string) => void;
}

const StackSearch = ({ onStackSearch }: StackSearchProps) => {
  return (
    <Container>
      {STACKS.map((stack) => (
        <StackBadge
          key={stack.name}
          stackImg={stack.img}
          stackName={stack.name}
          onClick={() => onStackSearch(stack.name)}
        />
      ))}
    </Container>
  );
};

export default StackSearch;
