import styled from 'styled-components';

export const wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0rem;
  height: 8rem;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(27, 40, 54, 0.2);
  z-index: 2;
`;

export const wrap_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4.4rem;
  width: 78.3%;
`;

export const content_selected = styled.div`
  position: relative;
  width: 9.2rem;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  cursor: pointer;
`;

export const content_unselected = styled.div`
  position: relative;
  width: 9.2rem;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  color: ${(props) => props.theme.TEXT._02};
  cursor: pointer;
`;

export const purple_line = styled.div`
  position: absolute;
  width: 85px;
  height: 4px;
  bottom: 0.5rem;
  /* Purple/01 */
  background: #790de4;
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;
