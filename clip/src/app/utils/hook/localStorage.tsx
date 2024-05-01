import { useState, useEffect } from 'react';

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<any>('');

  useEffect(() => {
    setValue(localStorage?.getItem(key));
  }, []);

  return { value };
};

export default useLocalStorage;
