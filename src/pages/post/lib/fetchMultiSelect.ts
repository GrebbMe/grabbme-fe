interface InputType {
  id: number;
  item: string;
}

const fetchMultiSelect = (inputArray: InputType[]): number[] => {
  return inputArray.map((item) => item.id);
};

export default fetchMultiSelect;
