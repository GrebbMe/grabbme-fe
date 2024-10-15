import { useState } from 'react';
import { Editor } from '@/features/post/ui/editor/Editor';
import * as S from '@/pages/post/ui/grabbzone/RegisterGrabbzone.style';
import { TextField, Button, TitleBar, Select } from '@/shared/ui';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { SelectListItem } from '@/shared/ui/select/Select';

const CAREER = [
  { id: 1, label: '1-2년차' },
  { id: 2, label: '3-5년차' },
  { id: 3, label: '5-7년차' },
  { id: 4, label: '7년차 이상' },
];

const JOB = [
  { id: 1, label: '프론트엔드' },
  { id: 2, label: '백엔드' },
  { id: 3, label: '웹 디자이너' },
  { id: 4, label: '데이터 엔지니어' },
  { id: 5, label: '풀스택' },
  { id: 6, label: '기획자' },
  { id: 7, label: '기타' },
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

const RegisterGrabbzone = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<SelectItem[]>([]);
  const [stack, setStack] = useState<SelectItem[]>([]);
  const [job, setJob] = useState<SelectListItem | null>(null);
  const [career, setCareer] = useState<SelectListItem | null>(null);

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

  const getContentLength = (htmlString: string): number => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    console.log(doc.body.textContent?.length);
    return doc.body.textContent?.length || 0;
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
        <Select items={JOB} placeholder="선택" size="sm" selected={job} onChangeSelected={setJob} />
      </S.JobContainer>
      <S.CareerContainer>
        <TitleBar label="개발 경력" />
        <Select
          items={CAREER}
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
          items={CATEGORY}
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
          items={STACK}
          selectLimit={5}
          selectedItems={stack}
          onClickSelectedItems={handleStack}
          placeholder="기술 스택을 선택해주세요."
        />
      </S.StackSelectContainer>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button>취소</Button>
          <Button>게시</Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </>
  );
};

export default RegisterGrabbzone;
