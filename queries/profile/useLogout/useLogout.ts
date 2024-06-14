import { Navigator, TokenService } from '@core/common';

const useLogout = () => {
  const onLogout = () => {
    TokenService.clearTokens();
    setTimeout(() => {
      Navigator.jumpToWebIdentity();
    }, 500);
  };

  return { onLogout };
};

export default useLogout;
