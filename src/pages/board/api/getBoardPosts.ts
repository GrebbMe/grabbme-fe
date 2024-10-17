import axios from 'axios';

interface GetBoardPostsParams {
  search?: string;
  stack?: string;
  page?: number;
  currentPath: number;
}

const POST_LIMIT = 5;

export const getBoardPosts = async ({
  search,
  stack,
  page = 1,
  currentPath,
}: GetBoardPostsParams) => {
  const baseURL = `https://grabbme.store/api/board/category/${currentPath}/search?limit=${POST_LIMIT}&page=${page}`;
  const params = new URLSearchParams();

  if (search) {
    params.append('search', search);
  }
  if (stack) {
    params.append('stack', stack);
  }
  const url = `${baseURL}${params.toString() ? '&' + params.toString() : ''}`;
  // console.log(url);
  try {
    const response = await axios.get(url);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log('임시 에러 처리', error);
  }
};
