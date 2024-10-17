import { SelectItem } from '@/shared/ui/select/MultiSelect';

export const convertIdToStackName = (ids: string[], stackList: SelectItem[]): SelectItem[] => {
  return ids.map((id) => {
    const stackItem = stackList.find((item) => item.id === Number(id));
    if (!stackItem) {
      return { id: 0, item: 'undefined' };
    }
    return stackItem;
  });
};
