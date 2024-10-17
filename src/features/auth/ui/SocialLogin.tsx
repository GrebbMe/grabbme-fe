import { useCallback } from 'react';
import IcGithubFilld from '@/shared/assets/svg/IcGithubFilled.svg?react';
import { Button } from '@/shared/ui';

export const SocialLogin = () => {
  const authroizeGithubLogin = useCallback((): void => {
    const url: string = `https://grabbme.store/api/auth/github`;
    window.location.href = url;
  }, []);

  return (
    <Button icon={<IcGithubFilld />} onClick={authroizeGithubLogin} variant="primary" size="sm">
      로그인
    </Button>
  );
};
