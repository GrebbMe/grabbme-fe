import { useState } from 'react';
import { PositionWithCount } from '@/features/post';
import { DeadlineCalendar } from '@/features/post/ui/deadlineCalendar';
import { Editor } from '@/features/post/ui/editor/Editor';
import { Position } from '@/features/post/ui/positionManage/PositionWithCount';
import { ProjectPeriod } from '@/features/post/ui/projectPeriod';
import { getContentLength } from '@/pages/post/lib/getContentLength';
import * as S from '@/pages/post/ui/project/RegisterProject.style';
import { useFetchCategories } from '@/shared/hooks/useFetchCategories';
import { Button, TitleBar, TextField } from '@/shared/ui';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';

const RegisterProject = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<SelectItem[]>([]);
  const [stack, setStack] = useState<SelectItem[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [deadline, setDeadline] = useState<Date | null>(new Date());
  const [positions, setPositions] = useState<Position[]>([{ id: -1, label: '', count: 1 }]);
  const [totalCount, setTotalCount] = useState(1);
  const { techStackList, categoryList } = useFetchCategories();

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

  const handleSetPositions = (newPositions: Position[]) => {
    setPositions(newPositions);
  };

  const handleSetTotalCount = (newTotalCount: number) => {
    setTotalCount(newTotalCount);
  };

  return (
    <>
      <S.Header>
        <span className="title">프로젝트 모집 게시글</span>
        <span>프로젝트에 대해 상세하게 작성해주세요.</span>
      </S.Header>
      <S.TitleInput>
        <TitleBar label="프로젝트명" count={title.length} limit={50} />
        <TextField size="lg" value={title} onChange={handleTitleChange} placeholder={''} />
      </S.TitleInput>
      <S.EditorContainer>
        <TitleBar
          label="프로젝트 소개"
          description="프로젝트에 대한 상세한 설명을 적어주세요."
          count={getContentLength(content)}
          limit={500}
        />
        <Editor value={content} onChange={handleContentChange} />
      </S.EditorContainer>
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
      <S.ProjectPeriodContainer>
        <TitleBar label="프로젝트 진행기간" />
        <ProjectPeriod
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </S.ProjectPeriodContainer>
      <S.DeadlineCalendarContainer>
        <TitleBar label="모집 마감일" />
        <DeadlineCalendar selectedDate={deadline} setSelectedDate={setDeadline} />
      </S.DeadlineCalendarContainer>
      <S.PositionContainer>
        <TitleBar label="포지션" />
        <PositionWithCount
          positions={positions}
          setPositions={handleSetPositions}
          totalCount={totalCount}
          setTotalCount={handleSetTotalCount}
        />
      </S.PositionContainer>
      <S.TotalContainer>
        <TitleBar label="총인원" />
        <S.TotalBox>
          <S.TotalNumber>{totalCount}</S.TotalNumber>
          <span>명</span>
        </S.TotalBox>
      </S.TotalContainer>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button>취소</Button>
          <Button>게시</Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </>
  );
};

export default RegisterProject;
