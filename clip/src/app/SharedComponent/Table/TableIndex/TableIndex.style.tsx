import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  width: 100%;
  height: 4.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.TEXT._05};
  border-bottom: 1px solid ${(props) => props.theme.TEXT._05};
  border-left: 0px;
  border-right: 0px;
`;
