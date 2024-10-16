import { CheckList } from '@/pages/auth/ui/SignUp';

export const areAllChecked = (obj: CheckList): boolean => {
  return Object.values(obj).every((value) => value === true);
};
