import { SelectItem } from '@/shared/ui/select/MultiSelect';

export const getItemsByIds = (ids: string[], data: SelectItem[]): string[] => {
  return ids
    .map((id) => {
      const item = data.find((d) => d.id === parseInt(id));
      return item ? item.item : '';
    })
    .filter((item) => item !== '');
};
