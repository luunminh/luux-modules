import configs from '@config';
import { NavigateFunction } from 'react-router-dom';
import { stringify } from '../utils';

export enum Tenant {
  ADMIN = 'admin',
  IDENTITY = 'identity',
  APP = 'app',
}

const goBack = (navigate: NavigateFunction, defaultUrl = '/') => {
  if (window.history.state && window.history.state.idx > 0) {
    navigate(-1);
  } else {
    navigate(defaultUrl, { replace: true });
  }
};

const getSubdomain = () => window.location.hostname.split('.')[0];

export const getNavigateUrl = (url: string) => (url.includes('http') ? url : `https://${url}`);

const getPortalUrl = (portal: Tenant) => {
  const portalUrl = configs.WEB_URLS.find((x) => x.endsWith(`/${portal}`));
  return portalUrl;
};

const jumpToWebIdentity = (nextPath = '') => {
  const identityWebUrl = getPortalUrl(Tenant.IDENTITY);
  return window.open(`${getNavigateUrl(identityWebUrl)}${nextPath}`, '_self');
};

const jumpToWebAdmin = (params?: any) => {
  const formattedParams = stringify(params);

  const adminWebUrl = getPortalUrl(Tenant.ADMIN);
  return window.open(`${getNavigateUrl(adminWebUrl)}?${formattedParams}`, '_self');
};

const jumpToWebApp = (params?: any) => {
  const formattedParams = stringify(params);

  const appWebUrl = getPortalUrl(Tenant.APP);
  return window.open(`${getNavigateUrl(appWebUrl)}?${formattedParams}`, '_self');
};

const isAdmin = () => window.location.pathname.includes(Tenant.ADMIN);
const isIdentity = () => window.location.pathname.includes(Tenant.IDENTITY);
const isApp = () => window.location.pathname.includes(Tenant.APP);

const getCurrentPortalUrl = () => window.location.pathname.split('/')[1];

export default {
  goBack,
  getSubdomain,

  jumpToWebIdentity,
  jumpToWebAdmin,
  jumpToWebApp,

  getPortalUrl,
  getCurrentPortalUrl,

  isAdmin,
  isIdentity,
  isApp,
};
