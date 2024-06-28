import * as C from './SearchBar.style';
import SearchBarDropdown from '@/app/SharedComponent/Admin/Dropdown/SearchBarDropdown/SearchBarDropdown';
import { useEffect, useState } from 'react';
import {
  EDUCATION_LEVEL_LIST,
  EDUCATION_STATE,
  JOB_LIST,
} from '@/app/SharedComponent/DropdownOption/DropdownOption';

import {
  sidoList as city,
  siguList as district,
} from '@/app/join/address/hooks/sidoList';
import TextInput from './TextInput/TextInput';

const options = ['휴대폰 번호', '이름', '학력', '주소', '직업', '성별'];
const GENDER_LIST = ['남성', '여성'];

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState<string>('휴대폰 번호');
  const [selectedOptionSecond, setSelectedOptionSecond] = useState<string>('');
  const [selectedOptionThird, setSelectedOptionThird] = useState<string>('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleSecondOption = (value: string) => {
    setSelectedOptionSecond(value);
  };

  const handleThirdOption = (value: string) => {
    setSelectedOptionThird(value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLInputElement>) => {
    let requestUrl = '';

    if (selectedOption === '휴대폰 번호') requestUrl = `?number=${inputValue}`;

    if (selectedOption === '이름') requestUrl = `?name=${inputValue}`;

    if (selectedOption === '학력')
      requestUrl = `?educationName=${selectedOptionSecond}&educationStatus=${selectedOptionThird}`;

    if (selectedOption === '주소')
      requestUrl = `?city=${selectedOptionSecond}&district=${selectedOptionThird}`;

    if (selectedOption === '직업') requestUrl = `?job=${selectedOptionSecond}`;

    if (selectedOption === '성별')
      requestUrl = `?gender=${selectedOptionSecond}`;

    window.location.href = requestUrl;
  };

  useEffect(() => {
    if (selectedOption === '직업') setSelectedOptionSecond(JOB_LIST[0]);
    if (selectedOption === '성별') setSelectedOptionSecond(GENDER_LIST[0]);
    if (selectedOption === '주소') {
      setSelectedOptionSecond(city[0]);
      setSelectedOptionThird(district[city[0]][0]);
    }
    if (selectedOption === '학력') {
      setSelectedOptionSecond(EDUCATION_LEVEL_LIST[0]);
      setSelectedOptionThird(EDUCATION_STATE[0]);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedOption === '주소') {
      setSelectedOptionThird(district[selectedOptionSecond][0]);
    }
  }, [selectedOptionSecond]);

  return (
    <C.wrap>
      <SearchBarDropdown
        options={options}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        id={'searchBar_1'}
        size={'16.8rem'}
      ></SearchBarDropdown>
      {(selectedOption === '휴대폰 번호' || selectedOption === '이름') && (
        <TextInput
          placeholder={selectedOption}
          value={inputValue}
          onChange={handleInputChange}
        ></TextInput>
      )}
      {selectedOption === '직업' && (
        <SearchBarDropdown
          options={JOB_LIST}
          onSelect={handleSecondOption}
          selectedOption={selectedOptionSecond}
          id={'searchBar_2'}
          size={'27.2rem'}
        ></SearchBarDropdown>
      )}
      {selectedOption === '성별' && (
        <SearchBarDropdown
          options={GENDER_LIST}
          onSelect={handleSecondOption}
          selectedOption={selectedOptionSecond}
          id={'searchBar_2'}
          size={'27.2rem'}
        ></SearchBarDropdown>
      )}
      {selectedOption === '주소' && (
        <>
          <SearchBarDropdown
            options={city}
            onSelect={handleSecondOption}
            selectedOption={selectedOptionSecond}
            id={'searchBar_2'}
            size={'13.6rem'}
          ></SearchBarDropdown>
          <SearchBarDropdown
            options={district[selectedOptionSecond]}
            onSelect={handleThirdOption}
            selectedOption={selectedOptionThird}
            id={'searchBar_3'}
            size={'12rem'}
          ></SearchBarDropdown>
        </>
      )}
      {selectedOption === '학력' && (
        <>
          <SearchBarDropdown
            options={EDUCATION_LEVEL_LIST}
            onSelect={handleSecondOption}
            selectedOption={selectedOptionSecond}
            id={'searchBar_2'}
            size={'13.6rem'}
          ></SearchBarDropdown>
          <SearchBarDropdown
            options={EDUCATION_STATE}
            onSelect={handleThirdOption}
            selectedOption={selectedOptionThird}
            id={'searchBar_3'}
            size={'12rem'}
          ></SearchBarDropdown>
        </>
      )}
      <C.search onClick={handleSearch}>검색</C.search>
    </C.wrap>
  );
};

export default SearchBar;
