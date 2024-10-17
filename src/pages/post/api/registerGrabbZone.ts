import axios from 'axios';

interface TeamData {
  position_category_id: number;
}

interface GrabbZoneData {
  user_id: number;
  title: string;
  content: string;
  career_category_id: number | null;
  project_category_id: number[];
  stack_category_id: number[];
  teamsData: TeamData[] | null;
}

export const registerGrabbZone = async (postData: GrabbZoneData) => {
  try {
    const response = await axios.post(' https://grabbme.store/api/board/category/2', postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
