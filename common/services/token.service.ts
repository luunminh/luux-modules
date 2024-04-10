import appConfigs from '@config';
import { LSHelper } from '../utils';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

const getACToken = () => LSHelper.getLSData(ACCESS_TOKEN);
const getRFToken = () => LSHelper.getLSData(REFRESH_TOKEN);

const setACToken = (token: string) => LSHelper.setLSData(ACCESS_TOKEN, token);
const setRFToken = (token: string) => LSHelper.setLSData(REFRESH_TOKEN, token);

const forceRefreshToken = async (token?: string) => {
  const rfToken = token || getRFToken();

  const response = await fetch(`${appConfigs.API_URL}refresh-token`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${rfToken}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log('forceRefreshToken:', data);

    setACToken(data.data.accessToken);
    setRFToken(data.data.refreshToken);

    return { accessToken: getACToken(), refreshToken: getRFToken() };
  }

  return null;
};

const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export default {
  getACToken,
  getRFToken,

  setACToken,
  setRFToken,
  clearTokens,
  forceRefreshToken,
};
