import axios from 'axios';

interface ProjectData {
  user_id: number;
  title: string;
  content: string;
  start_month: string | null;
  end_month: string | null;
  project_category_id: number[];
  stack_category_id: number[];
  expired_at: string | null;
  teamsData: {
    position_category_id: number;
    total_cnt: number;
  }[];
}

export const registerProject = async (postData: ProjectData) => {
  try {
    const response = await axios.post(' https://grabbme.store/api/board/category/1', postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
