import { StackData } from '@/features/home/model/top5Stacks.model';

export const fetchData = async (): Promise<StackData[] | undefined> => {
  try {
    const response: Response = await fetch('/data/top5Stacks.json', {
      method: 'GET',
    });

    const data: StackData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
};
