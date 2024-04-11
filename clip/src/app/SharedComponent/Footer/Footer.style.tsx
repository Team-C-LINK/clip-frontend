import styled from 'styled-components';

export const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  bottom: 0dvh;
  z-index: 1;
  background-color: ${(props) => props.theme.BACKGROUND._02};
`;
