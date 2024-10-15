import { useLocation, useNavigate } from 'react-router-dom';
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
import { Container } from '@/shared/ui/stackList/StackList.style';

const stacks = [
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

const StackList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (stack: string) => {
    const currentPath = location.pathname;
    if (currentPath !== '/grabbzone') {
      navigate(`/project?page=1&stack=${stack}`);
    } else {
      navigate(`/grabbzone?page=1&stack=${stack}`);
    }
  };

  return (
    <Container>
      {stacks.map((stack) => (
        <StackBadge
          key={stack.name}
          stackImg={stack.img}
          stackName={stack.name}
          onClick={() => handleSearch(stack.name)}
        />
      ))}
    </Container>
  );
};

export default StackList;
