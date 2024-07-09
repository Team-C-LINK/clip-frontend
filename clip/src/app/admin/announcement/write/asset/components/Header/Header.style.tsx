import styled from 'styled-components';

export const wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  height: 7rem;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(27, 40, 54, 0.2);
  background-color: #fff;
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
