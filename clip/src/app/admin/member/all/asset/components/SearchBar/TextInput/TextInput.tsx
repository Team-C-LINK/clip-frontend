import styled from 'styled-components';
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';
import Image from 'next/image';
interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<PhoneNumberInputProps> = ({ value, onChange }) => {
  return (
    <Search_input
      type="text"
      value={value}
      placeholder={'검색하기'}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Search_input = styled.input.attrs({ type: 'text' })`
  position: relative;
  width: 34.6rem;
  height: 3.8rem;
  border: 0;
  padding-left: 1.5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  background-image: url(${searchIcon.src});
  background-position: 1rem center;
  background-repeat: no-repeat;
  text-align: center;
  color: #252525;
  outline: none;
  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
`;

export default TextInput;
