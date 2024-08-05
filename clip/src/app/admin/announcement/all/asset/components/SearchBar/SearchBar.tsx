import * as C from './SearchBar.style';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import TextInput from './TextInput/TextInput';
import AnnouncementType from '@/app/type/Announcment';

interface SearchBarProps {
  setList: React.Dispatch<AnnouncementType[]>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setList }) => {
  const params = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const category = params.get('announcementType');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const search = () => {
    if (category) window.location.href = `&name=${inputValue}`;
    else window.location.href = `?name=${inputValue}`;
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
