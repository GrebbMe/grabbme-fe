import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModal } from '@/shared/hooks/useModal';
import { SelectItem } from '@/shared/ui/select/MultiSelect';
import { SelectListItem } from '@/shared/ui/select/Select';

interface PositionCategory {
  position_category_id: number;
  kor_name: string;
}

interface CareerCategory {
  career_category_id: number;
  content: string;
}

interface StackCategory {
  stack_category_id: number;
  name: string;
}

interface ProjectCategory {
  project_category_id: number;
  kor_name: string;
}

interface CategoryData {
  jobPosition: SelectListItem[];
  careerYear: SelectListItem[];
  techStackList: SelectItem[];
  categoryList: SelectItem[];
  isLoading: boolean;
  error: string | null;
}

export const useFetchCategories = (): CategoryData => {
  const [jobPosition, setJobPosition] = useState<SelectListItem[]>([]);
  const [careerYear, setCareerYear] = useState<SelectListItem[]>([]);
  const [techStackList, setTechStackList] = useState<SelectItem[]>([]);
  const [categoryList, setCategoryList] = useState<SelectItem[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { showModal } = useModal();

  useEffect(() => {
    const fetchAllCategories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [positionRes, careerRes, stackRes, categoryRes] = await Promise.all([
          axios.get('https://grabbme.store/api/public-data/position-categories'),
          axios.get('https://grabbme.store/api/public-data/career-categories'),
          axios.get('https://grabbme.store/api/public-data/stack-categories'),
          axios.get('https://grabbme.store/api/public-data/project-categories'),
        ]);
        setJobPosition(
          positionRes.data.data.map(
            (item: PositionCategory): SelectListItem => ({
              id: item.position_category_id,
              label: item.kor_name,
            }),
          ),
        );
        setCareerYear(
          careerRes.data.data.map(
            (item: CareerCategory): SelectListItem => ({
              id: item.career_category_id,
              label: item.content,
            }),
          ),
        );
        setTechStackList(
          stackRes.data.data.map(
            (item: StackCategory): SelectItem => ({
              id: item.stack_category_id,
              item: item.name,
            }),
          ),
        );
        setCategoryList(
          categoryRes.data.data.map(
            (item: ProjectCategory): SelectItem => ({
              id: item.project_category_id,
              item: item.kor_name,
            }),
          ),
        );
      } catch (error) {
        showModal({
          content: `데이터를 불러오는 중 오류가 발생했습니다.\n${error}`,
          type: 'alert',
        });
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jobPosition, careerYear, techStackList, categoryList, isLoading, error };
};
