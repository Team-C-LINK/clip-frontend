import styled from 'styled-components';

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

export default Search_input;
