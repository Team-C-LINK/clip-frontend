import styled from 'styled-components';
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';

const Search_input = styled.input.attrs({ type: 'text' })`
  position: relative;
  width: 29.6rem;
  height: 3.8rem;
  border: 0;
  padding-left: 1.5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  background-image: url(${searchIcon.src});
  background-position: 1rem center;
  background-repeat: no-repeat;
  text-align: left;
  padding-left: 5rem;
  color: #252525;
  outline: none;
  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
`;

export default Search_input;
