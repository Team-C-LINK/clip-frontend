import styled from 'styled-components';

type selectBox = {
  src: any;
  textcolor: string;
  backgroundcolor: string;
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  overflow: scroll;
  gap: 5rem;
`;

export const Dropdown_wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1.2rem;
  margin-top: 5rem;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const Dropdown_list_wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2.3rem;

  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const Dropdown_title = styled.span`
  /* Regular/B3 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Dropdown = styled.select<any>`
  /*  Check list */

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  width: 91.1dvw;
  height: 4.4rem;

  background-color: ${(props) => props.backgroundcolor};
  background: url(${(props) => props.src}) no-repeat right 1.3rem center;
  color: ${(props) => props.textcolor};
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
