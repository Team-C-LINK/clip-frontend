import styled from 'styled-components';
import downArrow from '@/app/join/education/assets/image/arrow.svg';

export const DropdownBase = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  width: 100%;
  height: 4.2rem;

  background: url(${downArrow.src}) no-repeat right 1.3rem center;
  background-color: ${(props) => props.theme.BACKGROUND._02};

  border: 0.1rem solid #828282;
  border-radius: 0.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};

  display: flex;
  align-items: center;

  outline: none;
`;
