import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '@/pages/auth/api';
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
import { Button } from '@/shared/ui';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { Select, SelectListItem } from '@/shared/ui/select/Select';
import TitleBar from '@/shared/ui/titleBar/TitleBar';
import { areAllChecked } from '@/shared/util';

interface User {
  email: string;
  nickname: string;
  selectedJobPosition: SelectListItem;
  selectedCareerYear: SelectListItem;
  selectedTechStackList: SelectItem[];
  selectedCategoryList: SelectItem[];
}

export interface CheckList {
  termOfService: boolean;
  privateInfo: boolean;
}

export const SignUp = () => {
  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');
  const nickname = url.searchParams.get('nickname');

  const { jobPosition, careerYear, techStackList, categoryList } = useFetchCategories();

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

  const handleCheckboxChange = (checkItem: 'termOfService' | 'privateInfo' | 'checkAll') => {
    if (checkItem === 'termOfService') {
      setIsCheckedList((prev) => ({ ...prev, termOfService: !prev.termOfService }));
      return;
    }
    if (checkItem === 'privateInfo') {
      setIsCheckedList((prev) => ({ ...prev, privateInfo: !prev.privateInfo }));
      return;
    }
    if (checkItem === 'checkAll') {
      if (isCheckedList.termOfService && isCheckedList.privateInfo) {
        setIsCheckedList({
          termOfService: false,
          privateInfo: false,
        });
        return;
      }
      setIsCheckedList({
        termOfService: true,
        privateInfo: true,
      });
    }
  };

  //! 회원가입 버튼 클릭
  const handleSignupClick = async () => {
    if (
      email &&
      nickname &&
      selectedJobPosition &&
      selectedCareerYear &&
      selectedTechStackList?.length &&
      selectedCategoryList?.length
    ) {
      if (!areAllChecked(isCheckedList)) {
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
        position_category_id: selectedJobPosition.id,
        carrer_category_id: selectedCareerYear.id,
        stack_category_id: selectedTechStackList.map(({ id }) => id),
        project_category_id: selectedCategoryList.map(({ id }) => id),
      };

      try {
        await registerUser(userDataForBE);
        navigate('/');
      } catch (err) {
        showModal({
          content: '회원가입 중 오류가 발생했습니다.',
          type: 'alert',
        });
      }
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
        <TitleBar label="닉네임" />
        <TextFieldStyle>{nickname ?? 'nickname'}</TextFieldStyle>
      </NickNameContainer>
      <EmailContainer>
        <TitleBar label="깃허브 이메일" />
        <TextFieldStyle>{email ?? 'email'}</TextFieldStyle>
      </EmailContainer>
      <PositionContainer>
        <TitleBar label="희망 직군" />
        <Select
          items={jobPosition}
          size="lg"
          placeholder="선택"
          selected={selectedJobPosition}
          onChangeSelected={setSelectedJobPosition}
        />
      </PositionContainer>
      <StackContainer>
        <TitleBar label="기술 스택" limit={5} count={selectedTechStackList?.length ?? 0} />
        <MultiSelect
          items={techStackList}
          selectedItems={selectedTechStackList ?? []}
          onClickSelectedItems={setSelectedTechStackList}
          selectLimit={5}
          placeholder="선택"
        />
      </StackContainer>
      <CategoryContainer>
        <TitleBar label="선호 카테고리" limit={3} count={selectedCategoryList?.length ?? 0} />
        <MultiSelect
          items={categoryList}
          selectedItems={selectedCategoryList ?? []}
          onClickSelectedItems={setSelectedCategoryList}
          selectLimit={3}
          placeholder="선택"
        />
      </CategoryContainer>
      <CareerContainer>
        <TitleBar label="개발 경력" />
        <Select
          items={careerYear}
          size="lg"
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
        <Button onClick={handleSignupClick} variant="primary" size="lg">
          완료
        </Button>
      </ButtonContainer>
    </>
  );
};
