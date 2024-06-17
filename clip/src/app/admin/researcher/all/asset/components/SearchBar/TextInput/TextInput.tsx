import styled from 'styled-components';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const test: { [key: string]: string } = {
    '휴대폰 번호': '010-0000-0000',
    이름: '이름 입력',
    '연구자 이름': '연구자 이름',
  };

  return (
    <Search_input
      type="text"
      value={value}
      placeholder={test[placeholder]}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Search_input = styled.input.attrs({ type: 'text' })`
  position: relative;
  width: 25.7rem;
  height: 4rem;
  border: 0;
  padding-left: 1.5rem;
  font-family: Pretendard;
  ${(props) => props.theme.FONT.Medium.B3};
  text-align: center;
  color: #252525;
  outline: none;
  border-bottom: 0.1rem solid #d9d9d9;
`;

export default TextInput;
