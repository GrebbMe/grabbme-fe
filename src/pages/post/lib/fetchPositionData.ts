interface InputType {
  id: number;
  label: string;
  count: number;
}

interface OutputType {
  position_category_id: number;
  total_cnt: number;
}

export const fetchPositionData = (inputArray: InputType[]): OutputType[] => {
  return inputArray.map((item) => ({
    position_category_id: item.id,
    total_cnt: item.count,
  }));
};
