import { format } from 'date-fns';

interface Post {
  post_id: number;
  title: string;
  content: string;
  expired_at: string;
  view_cnt: number;
  bookmarked_cnt: number;
  stack_category_id: string[];
  post_category_id: {
    id: number;
    post_category_name: string;
  };
  career_category_id: {
    career_category_id: number;
    content: string;
  } | null;
}

interface TransformedPost {
  id: number;
  title: string;
  content: string;
  career: string | undefined;
  expiredAt: string | undefined;
  stacks: string[];
  viewCount: number;
  bookmarkCount: number;
  chatCount: number;
  isBookmarked: boolean;
}

const getOnlyContent = (htmlString: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  return doc.body.textContent || '';
};

const formatDate = (isoString: string): string => {
  return format(new Date(isoString), 'yyyy. MM. dd 까지');
};

const transformPost = (post: Post): TransformedPost => {
  return {
    id: post.post_id,
    title: post.title,
    content: getOnlyContent(post.content),
    career: post.career_category_id ? post.career_category_id.content : undefined,
    expiredAt: post.expired_at ? formatDate(post.expired_at) : undefined,
    stacks: post.stack_category_id,
    viewCount: post.view_cnt,
    bookmarkCount: post.bookmarked_cnt,
    chatCount: 0,
    isBookmarked: post.bookmarked_cnt > 0,
  };
};

export const boardPostFetch = (posts: Post[]): TransformedPost[] => {
  return posts.map((post) => transformPost(post));
};
