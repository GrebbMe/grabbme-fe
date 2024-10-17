export interface UserProfileResponse {
  status: number;
  data: {
    user_id: number;
    nickname: string;
    email: string;
    stack_category_id: string[];
    project_category_id: string[];
    position_category_id: {
      position_category_id: number;
      name: string;
      kor_name: string;
      abbreviation: string;
    };
    career_category_id: {
      career_category_id: number;
      content: string;
    };
  };
  message: string;
}
