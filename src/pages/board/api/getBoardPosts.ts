import axios from 'axios';

interface GetBoardPostsParams {
  search?: string;
  stack?: string;
  page?: number;
}

const POST_LIMIT = 5;

export const getBoardPosts = async ({ search, stack, page = 1 }: GetBoardPostsParams) => {
  const baseURL = `/search?limit=${POST_LIMIT}&page=${page}`;
  const params = new URLSearchParams();

  if (search) {
    params.append('search', search);
  }
  if (stack) {
    params.append('stack', stack);
  }
  const url = `${baseURL}${params.toString() ? '&' + params.toString() : ''}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('임시 에러 처리', error);
  }
};
