import { useState } from 'react';
import styled from 'styled-components';

// 타입 정의
interface SelectedDate {
  start: string;
  end: string;
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 300px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 120px;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;

  span {
    margin-left: 8px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const MonthButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  background: #2c3e50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #1a242f;
  }
`;

const ApplyButton = styled.button`
  background: #fff;
  border: 1px solid #2c3e50;
  color: #2c3e50;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ProjectPeriod = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({ start: '', end: '' });
  const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null); // 어떤 input이 활성화되었는지 저장

  const months: string[] = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const handleInputClick = (inputType: 'start' | 'end') => {
    setActiveInput(inputType); // 활성화된 input 저장
    setIsModalOpen(true);
  };

  const handleMonthSelect = (month: string) => {
    if (activeInput === 'start') {
      setSelectedDate({ ...selectedDate, start: month });
    } else if (activeInput === 'end') {
      setSelectedDate({ ...selectedDate, end: month });
    }
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div>
      <Container>
        <InputBox onClick={() => handleInputClick('start')}>
          <span>{selectedDate.start || '선택'}</span>
          <span role="img" aria-label="calendar">
            📅
          </span>
        </InputBox>
        <span>-</span>
        <InputBox onClick={() => handleInputClick('end')}>
          <span>{selectedDate.end || '선택'}</span>
          <span role="img" aria-label="calendar">
            📅
          </span>
        </InputBox>
      </Container>

      {isModalOpen && (
        <Modal>
          <h2>2024년</h2>
          <MonthGrid>
            {months.map((month) => (
              <MonthButton key={month} onClick={() => handleMonthSelect(month)}>
                {month}
              </MonthButton>
            ))}
          </MonthGrid>
          <ModalActions>
            <CancelButton onClick={() => setIsModalOpen(false)}>취소</CancelButton>
            <ApplyButton onClick={() => setIsModalOpen(false)}>적용</ApplyButton>
          </ModalActions>
        </Modal>
      )}
    </div>
  );
};
