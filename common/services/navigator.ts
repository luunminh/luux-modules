// import configs from '@config';
// import { NavigateFunction } from 'react-router-dom';

export enum AppPortal {
  IDENTITY = 'identity',
  ADMIN = 'admin',
  APP = 'app',
}

// const goBack = (navigate: NavigateFunction, defaultUrl = '/') => {
//   if (window.history.state && window.history.state.idx > 0) {
//     navigate(-1);
//   } else {
//     navigate(defaultUrl, { replace: true });
//   }
// };

// const getSubdomain = () => window.location.hostname.split('.')[0];

// export const getNavigateUrl = (url: string) => (url.includes('http') ? url : `https://${url}`);

// const jumpToWebIdentity = (nextPath = '') => {
//   const identityWebUrl = `${configs.WEB_URLS.find((x) => x.endsWith('/identity'))}/`;
//   return window.open(`${getNavigateUrl(identityWebUrl)}${nextPath}`, '_self');
// };

// const jumpToWebAdmin = (nextPath = '') => {
//   const adminWebUrl = `${configs.WEB_URLS.find((x) => x.endsWith('/admin'))}/`;
//   return window.open(`${getNavigateUrl(adminWebUrl)}${nextPath}`, '_self');
// };

// export default {
//   goBack,
//   getSubdomain,
//   jumpToWebIdentity,
//   jumpToWebAdmin,
// };
