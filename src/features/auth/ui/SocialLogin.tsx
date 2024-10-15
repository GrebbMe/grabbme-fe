import { useCallback } from 'react';
import IcGithubFilld from '@/shared/assets/svg/IcGithubFilled.svg?react';
import { Button } from '@/shared/ui';

const CLIENT_ID: string = import.meta.env.VITE_GITHUB_LOGIN_CLIENT_ID;
const REDIRECT_URI: string = 'http://localhost:5173/';

export const SocialLogin = () => {
  const authroizeGithubLogin = useCallback((): void => {
    const url: string = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user user:email`;
    window.location.href = url;
    // CLIENT_ID가 절대로 변경되지 않을 것이라고 확신되어 esLint를 끔
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CLIENT_ID]);

  return (
    <Button icon={<IcGithubFilld />} onClick={authroizeGithubLogin}>
      로그인
    </Button>
  );
};
