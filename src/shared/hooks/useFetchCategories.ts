import axios from 'axios';
import { useEffect, useState } from 'react';
import { SelectItem } from '@/shared/ui/select/MultiSelect';
import { SelectListItem } from '@/shared/ui/select/SelectList';

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
  kor_name: string;
}

interface ProjectCategory {
  project_category_id: number;
  kor_name: string;
}

interface CategoryData {
  jobPosition: SelectListItem[] | null;
  careerYear: SelectListItem[] | null;
  techStackList: SelectItem[] | null;
  categoryList: SelectItem[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchCategories = (): CategoryData => {
  const [jobPosition, setJobPosition] = useState<SelectListItem[] | null>(null);
  const [careerYear, setCareerYear] = useState<SelectListItem[] | null>(null);
  const [techStackList, setTechStackList] = useState<SelectItem[] | null>(null);
  const [categoryList, setCategoryList] = useState<SelectItem[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [positionRes, careerRes, stackRes, categoryRes] = await Promise.all([
          axios.get('/public-data/position-categories'),
          axios.get('/public-data/carrer-categories'),
          axios.get('/public-data/stack-categories'),
          axios.get('/public-data/project-categories'),
        ]);
        setJobPosition(
          positionRes.data.map(
            (item: PositionCategory): SelectListItem => ({
              value: item.position_category_id.toString(),
              label: item.kor_name,
            }),
          ),
        );
        setCareerYear(
          careerRes.data.map(
            (item: CareerCategory): SelectListItem => ({
              value: item.career_category_id.toString(),
              label: item.content,
            }),
          ),
        );
        setTechStackList(
          stackRes.data.map(
            (item: StackCategory): SelectItem => ({
              id: item.stack_category_id,
              item: item.kor_name,
            }),
          ),
        );
        setCategoryList(
          categoryRes.data.map(
            (item: ProjectCategory): SelectItem => ({
              id: item.project_category_id,
              item: item.kor_name,
            }),
          ),
        );
      } catch (error) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchAllCategories();
  }, []);

  return { jobPosition, careerYear, techStackList, categoryList, isLoading, error };
};
