import * as S from './AllStackBadge.style';
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
import { StackBadge } from '@/shared/ui/stackBadge/StackBadge';
import { Stack } from '@/widgets/home/model/stack.model';

const STACKS: Stack[] = [
  {
    id: 1,
    stackName: 'React',
    stackImg: `${IcReact}`,
  },
  {
    id: 2,
    stackName: 'Node.js',
    stackImg: `${IcNodejs}`,
  },
  {
    id: 3,
    stackName: 'NestJS',
    stackImg: `${IcNestjs}`,
  },
  {
    id: 4,
    stackName: 'Spring',
    stackImg: `${IcSpring}`,
  },
  {
    id: 5,
    stackName: 'Django',
    stackImg: `${IcDjango}`,
  },
  {
    id: 6,
    stackName: 'Flutter',
    stackImg: `${IcFlutter}`,
  },
  {
    id: 7,
    stackName: 'Vue',
    stackImg: `${IcVue}`,
  },
  {
    id: 8,
    stackName: 'Rust',
    stackImg: `${IcRust}`,
  },
  {
    id: 9,
    stackName: 'Swift',
    stackImg: `${IcSwift}`,
  },
  {
    id: 10,
    stackName: 'Kotlin',
    stackImg: `${IcKotlin}`,
  },
];

const AllStackBadge = () => {
  return (
    <S.AllStackBadgeContainer>
      {STACKS.map((stack) => (
        <StackBadge stackName={stack.stackName} stackImg={stack.stackImg} onClick={() => {}} />
      ))}
    </S.AllStackBadgeContainer>
  );
};

export default AllStackBadge;
