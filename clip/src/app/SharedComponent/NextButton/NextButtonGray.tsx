'use client';

import styled from 'styled-components';

type button = {
  $size: string;
};

const NextButtonGray = styled.div<button>`
  width: ${(props) => props.$size};
  height: 4.4rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  font-family: Pretendard;
  ${(props) => props.theme.FONT.Medium.B2};
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.BACKGROUND._DISABLE};
  color: ${(props) => props.theme.TEXT._03};
`;

export default NextButtonGray;
