import * as C from './SearchBar.style';
import { useEffect, useState } from 'react';

import TextInput from './TextInput/TextInput';
import { useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const params = useSearchParams();
  const curInput = params.get('name') ? params.get('name') : '';
  const [inputValue, setInputValue] = useState(curInput as string);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const search = () => {
    window.location.href = `?name=${inputValue}`;
  };

  return (
    <C.wrap>
      <TextInput
        placeholder={'연구자 이름'}
        value={inputValue}
        onChange={handleInputChange}
      ></TextInput>
      <C.search onClick={search}>검색</C.search>
    </C.wrap>
  );
};

export default SearchBar;
