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
}

export const useFetchCategories = (): CategoryData => {
  const [jobPosition, setJobPosition] = useState<SelectListItem[] | null>(null);
  const [careerYear, setCareerYear] = useState<SelectListItem[] | null>(null);
  const [techStackList, setTechStackList] = useState<SelectItem[] | null>(null);
  const [categoryList, setCategoryList] = useState<SelectItem[] | null>(null);

  useEffect(() => {
    axios
      .get('/public-data/position-categories')
      .then((positionRes) => {
        setJobPosition(
          positionRes.data.map(
            (item: PositionCategory): SelectListItem => ({
              value: item.position_category_id.toString(),
              label: item.kor_name,
            }),
          ),
        );
      })
      .catch((err) => console.log(err));

    axios
      .get('/public-data/carrer-categories')
      .then((careerRes) => {
        setCareerYear(
          careerRes.data.map(
            (item: CareerCategory): SelectListItem => ({
              value: item.career_category_id.toString(),
              label: item.content,
            }),
          ),
        );
      })
      .catch((err) => console.log(err));

    axios
      .get('/public-data/stack-categories')
      .then((stackRes) => {
        setTechStackList(
          stackRes.data.map(
            (item: StackCategory): SelectItem => ({
              id: item.stack_category_id,
              item: item.kor_name,
            }),
          ),
        );
      })
      .catch((err) => console.log(err));

    axios
      .get('/public-data/project-categories')
      .then((categoryRes) => {
        setCategoryList(
          categoryRes.data.map(
            (item: ProjectCategory): SelectItem => ({
              id: item.project_category_id,
              item: item.kor_name,
            }),
          ),
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return { jobPosition, careerYear, techStackList, categoryList };
};
