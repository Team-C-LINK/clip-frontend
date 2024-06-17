import * as C from './SearchBar.style';
import { useEffect, useState } from 'react';

import TextInput from './TextInput/TextInput';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <C.wrap>
      <TextInput
        placeholder={'연구자 이름'}
        value={inputValue}
        onChange={handleInputChange}
      ></TextInput>

      <C.search>검색</C.search>
    </C.wrap>
  );
};

export default SearchBar;
