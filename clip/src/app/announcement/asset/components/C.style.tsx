import styled, { keyframes } from 'styled-components';

export const scroll_top_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 4.2rem;
  height: 4.2rem;
  right: 4%;
  bottom: 10rem;
  z-index: 2;

  background: #ffffff;
  border: 1px solid #790de4;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 100%;
`;

export const no_content = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.theme.FONT.Header.H3};
  color: ${(props) => props.theme.TEXT._03};
`;
