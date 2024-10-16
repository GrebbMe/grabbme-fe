import axios from 'axios';
interface User {
  email: string;
  nickname: string;
  position_category_id: number;
  carrer_category_id: number;
  stack_category_id: number[];
  project_category_id: number[];
}

export const registerUser = async (userDataForBE: User) => {
  try {
    const response = await axios.post('/user', userDataForBE);
    const { accessToken, refreshToken } = response.data;

    // 브라우저 쿠키에 access 토큰, refresh 토큰 저장
    document.cookie = `accessToken=${accessToken}; path=/; max-age=3600; secure; SameSite=Lax;`;
    document.cookie = `refreshToken=${refreshToken}; path=/; max-age=${7 * 24 * 60 * 60}; secure; SameSite=Lax;`;
  } catch (error) {
    console.error('User registration failed:', error);
    throw error;
  }
};
