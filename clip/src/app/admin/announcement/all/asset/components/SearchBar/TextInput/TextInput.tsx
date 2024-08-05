import styled from 'styled-components';
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Search_input
      type="text"
      value={value}
      placeholder={'연구자 검색하기'}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Search_input = styled.input.attrs({ type: 'text' })`
  position: relative;
  width: 29.6rem;
  height: 3.8rem;
  padding-left: 5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  background-image: url(${searchIcon.src});
  background-position: 1rem center;
  background-repeat: no-repeat;
  text-align: left;
  color: #252525;
  outline: none;
  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
`;

export default TextInput;
