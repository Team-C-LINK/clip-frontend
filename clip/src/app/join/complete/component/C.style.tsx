import styled from 'styled-components';

type selectBox = {
  src: any;
  $textcolor: string;
  $background: string;
};

export const Title_wrap = styled.div`
  position: relative;
  margin-top: 10rem;
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

export const Dropdown = styled.select<selectBox>`
  /*  Check list */

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  width: 91.1%;
  height: 4.4rem;

  background: url(${($props) => $props.src}) no-repeat right 1.3rem center;
  background-color: ${(props) => props.$background};
  color: ${($props) => $props.$textcolor};
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

export const Middle_text = styled.span`
  position: relative;
  width: fit-content;
  height: fit-content;

  /* Medium/B1 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.8rem;
  /* identical to box height, or 156% */
  display: flex;
  align-items: center;

  /* Text/01 */
  color: #252525;
`;

export const Btn_wrap = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  bottom: 2dvh; // 고정값
`;
