import { useEffect } from 'react';

const useClickOutside = (ref: React.MutableRefObject<any>, callBack: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callBack();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
  return ref.current;
};

export default useClickOutside;
