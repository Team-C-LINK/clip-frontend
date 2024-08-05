import * as C from './SearchBar.style';
import React, { useEffect, useState } from 'react';

import Search_input from './TextInput/TextInput';
import { useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const params = useSearchParams();
  const curInput = params.get('name') ? params.get('name') : '';
  const [inputValue, setInputValue] = useState(curInput as string);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      window.location.href = `?name=${e.currentTarget.value}`;
  };

  const search = () => {
    window.location.href = `?name=${inputValue}`;
  };

  return (
    <C.wrap>
      <Search_input
        placeholder={'연구자 검색하기'}
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleEnter}
      ></Search_input>
      <C.search onClick={search}>검색</C.search>
    </C.wrap>
  );
};

export default SearchBar;
