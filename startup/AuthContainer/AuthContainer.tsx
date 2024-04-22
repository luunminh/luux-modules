import { TokenService, useComponentDidMount } from '@core/common';
import { useAuthStore } from '@core/store';
import { FC } from 'react';

const AuthContainer: FC<Props> = () => {
  const { onSetIsAuthenticated, onSetUserProfile } = useAuthStore();

  // TODO: handle getMyProfile
  // const { getMyProfile } = useProfile();

  useComponentDidMount(() => {
    const accessToken = TokenService.getACToken();
    const refreshToken = TokenService.getRFToken();

    if (accessToken && refreshToken) {
      // getMyProfile();
      onSetIsAuthenticated(true);
    } else {
      clearAuth();
    }
  });

  const clearAuth = () => {
    TokenService.clearTokens();

    onSetUserProfile(null);
    onSetIsAuthenticated(false);
  };

  return null;
};

type Props = {};

export default AuthContainer;
