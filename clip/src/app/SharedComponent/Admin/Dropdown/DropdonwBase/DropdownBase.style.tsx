import styled from 'styled-components';
import downArrow from '@/app/join/education/assets/image/arrow.svg';

export const DropdownBase = styled.div`
  /*  Check list */

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

  border: 0.1rem solid #d9d9d9;
  border-radius: 0.4rem;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;

  /* Text/02 */

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  appearance: none;

  outline: none;
`;
