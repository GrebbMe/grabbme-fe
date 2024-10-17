import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@/features/post';
import fetchMultiSelect from '@/pages/post/lib/fetchMultiSelect';
import { getContentLength } from '@/pages/post/lib/getContentLength';
import { useRegisterGrabbzone } from '@/pages/post/model/useRegisterGrabbZone';
import * as S from '@/pages/post/ui/grabbzone/RegisterGrabbzone.style';
import { useFetchCategories } from '@/shared/hooks/useFetchCategories';
import { useModal } from '@/shared/hooks/useModal';
import { useToast } from '@/shared/hooks/useToast';
import { TextField, Button, TitleBar, Select } from '@/shared/ui';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { SelectListItem } from '@/shared/ui/select/Select';

const RegisterGrabbzone = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<SelectItem[]>([]);
  const [stack, setStack] = useState<SelectItem[]>([]);
  const [job, setJob] = useState<SelectListItem | null>(null);
  const [career, setCareer] = useState<SelectListItem | null>(null);
  const { showModal } = useModal();
  const { showToast } = useToast();
  const { careerYear, jobPosition, techStackList, categoryList } = useFetchCategories();
  const { registerGrabbzoneMutation } = useRegisterGrabbzone();
  const navigate = useNavigate();
  console.log('');
  const handleTitleChange = (e: string) => {
    setTitle(e);
  };
  const handleContentChange = (e: string) => {
    setContent(e);
  };

  const handleCategory = (items: SelectItem[]) => {
    setCategory(items);
  };

  const handleStack = (items: SelectItem[]) => {
    setStack(items);
  };

  const handleRegisterGrabbZone = () => {
    const postData = {
      user_id: 27,
      title: title,
      content: content,
      project_category_id: fetchMultiSelect(category),
      career_category_id: career ? career.id : null,
      stack_category_id: fetchMultiSelect(stack),
      teamsData: job ? [{ position_category_id: job.id }] : null,
    };

    const hasNull = Object.values(postData).some((value) => value === null || value === '');

    if (hasNull) {
      return showModal({ content: '빈칸 채우세요', type: 'alert' });
    }

    return showModal({
      content: '그랩존에 인재등록을 하시겠습니가?',
      type: 'confirm',
      onConfirm: () => {
        registerGrabbzoneMutation(postData);
        navigate('/');
      },
    });
  };

  return (
    <>
      <S.Header>
        <span className="title">그랩존 등록 게시글</span>
        <span>나의 차별점을 작성해보세요!</span>
      </S.Header>
      <S.TitleInput>
        <TitleBar size="lg" label="게시글 제목" count={title.length} limit={50} />
        <TextField size="lg" value={title} onChange={handleTitleChange} placeholder={''} />
      </S.TitleInput>
      <S.EditorContainer>
        <TitleBar
          label="자기 소개"
          description="나의 차별점을 작성해보세요."
          count={getContentLength(content)}
          limit={500}
        />
        <Editor value={content} onChange={handleContentChange} />
      </S.EditorContainer>
      <S.JobContainer>
        <TitleBar size="lg" label="희망 직군" />
        <Select
          items={jobPosition}
          placeholder="선택"
          size="sm"
          selected={job}
          onChangeSelected={setJob}
        />
      </S.JobContainer>
      <S.CareerContainer>
        <TitleBar label="개발 경력" />
        <Select
          items={careerYear}
          placeholder="선택"
          size={'sm'}
          selected={career}
          onChangeSelected={setCareer}
        />
      </S.CareerContainer>
      <S.CategorySelectContainer>
        <TitleBar
          label={'선호 카테고리'}
          description="카테고리는 최대 3개까지 선택할 수 있어요."
          limit={3}
          count={category.length}
        />
        <MultiSelect
          items={categoryList}
          selectLimit={3}
          selectedItems={category}
          onClickSelectedItems={handleCategory}
          placeholder="카테고리를 선택해주세요."
        />
      </S.CategorySelectContainer>
      <S.StackSelectContainer>
        <TitleBar
          label={'기술 스택'}
          description="스택은 최대 5개까지 선택할 수 있어요."
          limit={5}
          count={stack.length}
        />
        <MultiSelect
          items={techStackList}
          selectLimit={5}
          selectedItems={stack}
          onClickSelectedItems={handleStack}
          placeholder="기술 스택을 선택해주세요."
        />
      </S.StackSelectContainer>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button variant="primary" size="sm">
            취소
          </Button>
          <Button variant="primary" size="sm" onClick={handleRegisterGrabbZone}>
            게시
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </>
  );
};

export default RegisterGrabbzone;
