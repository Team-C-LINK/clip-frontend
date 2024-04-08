import styled from 'styled-components';

export const header = styled.div`
  /* Header */

  box-sizing: border-box;

  position: relative;
  width: 100%;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  /* Line/01 */
  border-bottom: 0.1rem solid #d9d9d9;
`;

export const header_title = styled.span`
  position: relative;
  width: fit-content;
  height: fit-content;

  /* Semi Bold/B1 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  /* identical to box height, or 156% */

  /* Text/01 */
  color: #252525;
`;

export const prev = styled.img`
  background: url(${(props) => props.src});
  position: absolute;
  left: 4.45dvw;
`;
