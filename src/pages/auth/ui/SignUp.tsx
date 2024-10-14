import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AgreementContainerStyle,
  AgreementWrapperStyle,
  ButtonContainer,
  CareerContainer,
  CategoryContainer,
  CustomCheckbox,
  CustomCheckboxLabel,
  EmailContainer,
  Header,
  HrStyle,
  NickNameContainer,
  PositionContainer,
  StackContainer,
  TextFieldStyle,
} from '@/pages/auth/ui/SignUp.style';
import { useFetchCategories } from '@/shared/hooks/useFetchCategories';
import { useModal } from '@/shared/hooks/useModal';
import { Button, SelectList } from '@/shared/ui';
import InputHeader from '@/shared/ui/inputHeader/InputHeader';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { SelectListItem } from '@/shared/ui/select/SelectList';

//! 임시 선언 (추후 백엔드 API 연결)
const POSITION_LIST = [
  { value: '1', label: '프론트엔드' },
  { value: '2', label: '백엔드' },
  { value: '3', label: 'DevOps' },
];

const CAREER_YEAR_LIST = [
  { value: '1', label: '1-2년차' },
  { value: '2', label: '3-5년차' },
  { value: '3', label: '5-7년차' },
];

const CATEGORY = [
  { id: 1, item: '웹 개발' },
  { id: 2, item: '앱 개발' },
  { id: 3, item: '데이터 엔지니어링/사이언스' },
  { id: 4, item: '인공지능/머신러닝' },
  { id: 5, item: '클라우드 컴퓨팅' },
  { id: 6, item: '기타' },
];

const STACK = [
  { id: 1, item: 'Svelte' },
  { id: 2, item: 'Bootstrap' },
  { id: 3, item: 'NestJs' },
  { id: 4, item: 'Express' },
  { id: 5, item: 'Django' },
  { id: 6, item: 'Spring Boot' },
  { id: 7, item: 'Laravel' },
  { id: 8, item: 'Fast API' },
  { id: 9, item: 'Flask' },
  { id: 10, item: 'Node.js' },
  { id: 11, item: 'MySQL' },
  { id: 12, item: 'PostgreSQL' },
  { id: 13, item: 'Docker' },
  { id: 14, item: 'Ruby on Rails' },
  { id: 15, item: 'ElasticSearch' },
  { id: 16, item: 'Terraform' },
  { id: 17, item: 'GraphQL' },
];

const areAllTrue = (obj: CheckList): boolean => {
  return Object.values(obj).every((value) => value === true);
};

interface User {
  email: string;
  nickname: string;
  selectedJobPosition: SelectListItem;
  selectedCareerYear: SelectListItem;
  selectedTechStackList: SelectItem[];
  selectedCategoryList: SelectItem[];
}

interface CheckList {
  termOfService: boolean;
  privateInfo: boolean;
}

export const SignUp = () => {
  const { jobPosition, careerYear, techStackList, categoryList } = useFetchCategories();
  console.log(jobPosition, careerYear, techStackList, categoryList);

  const [user, setUser] = useState<User | null>(null);
  const [selectedJobPosition, setSelectedJobPosition] = useState<SelectListItem | null>(null);
  const [selectedCareerYear, setSelectedCareerYear] = useState<SelectListItem | null>(null);
  const [selectedTechStackList, setSelectedTechStackList] = useState<SelectItem[] | null>(null);
  const [selectedCategoryList, setSelectedCategoryList] = useState<SelectItem[] | null>(null);
  const [isCheckedList, setIsCheckedList] = useState<CheckList>({
    termOfService: false,
    privateInfo: false,
  });
  const { showModal } = useModal();
  const navigate = useNavigate();

  const handleCheckboxChange = (checkItem: string) => {
    if (checkItem === 'termOfService') {
      setIsCheckedList({ ...isCheckedList, termOfService: !isCheckedList.termOfService });
    } else if (checkItem === 'privateInfo') {
      setIsCheckedList({ ...isCheckedList, privateInfo: !isCheckedList.privateInfo });
    } else if (checkItem === 'checkAll') {
      if (isCheckedList.termOfService && isCheckedList.privateInfo) {
        setIsCheckedList({
          termOfService: false,
          privateInfo: false,
        });
      } else {
        setIsCheckedList({
          termOfService: true,
          privateInfo: true,
        });
      }
    }
  };

  //! 회원가입 버튼 클릭
  const handleSignupClick = () => {
    const url = new URL(window.location.href);
    const email = url.searchParams.get('email');
    const nickname = url.searchParams.get('nickname');

    if (
      email &&
      nickname &&
      selectedJobPosition &&
      selectedCareerYear &&
      selectedTechStackList?.length &&
      selectedCategoryList?.length
    ) {
      if (!areAllTrue(isCheckedList)) {
        showModal({
          content: `모든 이용약관에 동의해주세요.`,
          type: 'alert',
        });
        return;
      }
      const userData = {
        email,
        nickname,
        selectedJobPosition,
        selectedCareerYear,
        selectedTechStackList,
        selectedCategoryList,
      };
      setUser(userData);

      const userDataForBE = {
        email,
        nickname,
        position_category_id: parseInt(selectedJobPosition.value),
        carrer_category_id: parseInt(selectedCareerYear.value),
        stack_category_id: selectedTechStackList.map(({ id }) => id),
        project_category_id: selectedCategoryList.map(({ id }) => id),
      };

      axios
        .post('/user', userDataForBE)
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          // 브라우저 쿠키에 access 토큰, refresh 토큰 저장
          document.cookie = `accessToken=${accessToken}; path=/; max-age=3600; secure; SameSite=Lax;`;
          document.cookie = `refreshToken=${refreshToken}; path=/; max-age=${7 * 24 * 60 * 60}; secure; SameSite=Lax;`;
          navigate('/');
        })
        .catch((err) => console.log(err));
    } else {
      showModal({
        content: `선택하지 않은 내용이 있어요. \n모든 내용을 선택해주세요.`,
        type: 'alert',
      });
      return;
    }
  };

  return (
    <>
      <Header>
        <span className="title">회원가입</span>
      </Header>
      <NickNameContainer>
        <InputHeader text={'닉네임'} isDetail={false} />
        <TextFieldStyle>{'nickname'}</TextFieldStyle>
      </NickNameContainer>
      <EmailContainer>
        <InputHeader text={'깃허브 이메일'} isDetail={false} />
        <TextFieldStyle>{'nickname'}</TextFieldStyle>
      </EmailContainer>
      <PositionContainer>
        <InputHeader text={'희망 직군'} />
        <SelectList
          //! 하드 코딩 : POSITION_LIST
          //! 백엔드 API : jobPosition
          items={POSITION_LIST}
          size={'lg'}
          placeholder="선택"
          selected={selectedJobPosition}
          onChangeSelected={setSelectedJobPosition}
        />
      </PositionContainer>
      <StackContainer>
        <InputHeader
          text={'기술 스택'}
          limit={5}
          count={selectedTechStackList?.length ?? 0}
          isCountable={true}
        />
        <MultiSelect
          //! 하드 코딩 : STACK
          //! 백엔드 API : teahStackList
          items={STACK}
          selectedItems={selectedTechStackList ?? []}
          onClickSelectedItems={setSelectedTechStackList}
          selectLimit={5}
          placeholder={'선택'}
        />
      </StackContainer>
      <CategoryContainer>
        <InputHeader
          text={'선호 카테고리'}
          limit={3}
          count={selectedCategoryList?.length ?? 0}
          isCountable={true}
        />
        <MultiSelect
          //! 하드 코딩 : CATEGORY
          //! 백엔드 API : categoryList
          items={CATEGORY}
          selectedItems={selectedCategoryList ?? []}
          onClickSelectedItems={setSelectedCategoryList}
          selectLimit={3}
          placeholder={'선택'}
        />
      </CategoryContainer>
      <CareerContainer>
        <InputHeader text={'개발 경력'} />
        <SelectList
          //! 하드 코딩 : CAREER_YEAR_LIST
          //! 백엔드 API : careerYear
          items={CAREER_YEAR_LIST}
          size={'lg'}
          placeholder="선택"
          selected={selectedCareerYear}
          onChangeSelected={setSelectedCareerYear}
        />
      </CareerContainer>
      <AgreementContainerStyle>
        <AgreementWrapperStyle>
          <CustomCheckbox
            id="check-all"
            checked={isCheckedList.termOfService && isCheckedList.privateInfo}
            onChange={() => handleCheckboxChange('checkAll')}
          />
          <CustomCheckboxLabel htmlFor="check-all">전체 동의</CustomCheckboxLabel>
        </AgreementWrapperStyle>
        <HrStyle />
        <AgreementWrapperStyle>
          <CustomCheckbox
            checked={isCheckedList.termOfService}
            onChange={() => handleCheckboxChange('termOfService')}
          />
          GrabbMe. 이용약관 동의 (필수)
        </AgreementWrapperStyle>
        <AgreementWrapperStyle>
          <CustomCheckbox
            checked={isCheckedList.privateInfo}
            onChange={() => handleCheckboxChange('privateInfo')}
          />
          GrabbMe. 개인정보 수집 및 이용 동의 (필수)
        </AgreementWrapperStyle>
      </AgreementContainerStyle>
      <ButtonContainer>
        <Button onClick={handleSignupClick}>완료</Button>
      </ButtonContainer>
    </>
  );
};
