import { useStackSearch } from '@/features/board/hooks/useStackSearch';
import { Container } from '@/features/board/ui/search/stackSearch/StackSearch.style';
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
  { img: `${IcReact}`, name: 'React', id: 1 },
  { img: `${IcVue}`, name: 'Vue', id: 2 },
  { img: `${IcNodejs}`, name: 'Node.js', id: 15 },
  { img: `${IcNestjs}`, name: 'NestJS', id: 7 },
  { img: `${IcSpring}`, name: 'Spring', id: 65 },
  { img: `${IcDjango}`, name: 'Django', id: 10 },
  { img: `${IcFlutter}`, name: 'Flutter', id: 57 },
  { img: `${IcRust}`, name: 'Rust', id: 54 },
  { img: `${IcSwift}`, name: 'Swift', id: 55 },
  { img: `${IcKotlin}`, name: 'Kotlin', id: 56 },
];

const StackSearch = () => {
  const { handleStackSearch } = useStackSearch();

  return (
    <Container>
      {STACKS.map((stack) => (
        <StackBadge
          key={stack.name}
          stackImg={stack.img}
          stackName={stack.name}
          onClick={() => handleStackSearch(stack.id)}
        />
      ))}
    </Container>
  );
};

export default StackSearch;
