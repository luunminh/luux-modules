import { useLocation } from 'react-router-dom';

/**
 *
 * @example
 *
 * const {pathname, search} = usePathname();
 *
 * return(
 *  <h1>Pathname: {pathname}</h1> >> /dev
 *  <h1>Search: {search}</h1> >> ?page=2&abc=2
 *  <h1>Pathname + search: {pathname}{search}</h1> >> /dev?page=2&abc=2
 * )
 */
const usePathname = (): { pathname: string; search: string } => {
  const location = useLocation();
  const { pathname, search } = location;
  return { pathname, search };
};

export default usePathname;
