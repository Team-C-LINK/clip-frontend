'use client';

import { createGlobalStyle } from 'styled-components';

type GlobalStyleType = {
  $isMobile: boolean;
};

const GlobalStyle = createGlobalStyle<GlobalStyleType>`
  html, body {
    font-size: 62.5%;
    line-height: 1.285;
    width: ${(props) => (props.$isMobile ? '100%' : '36rem')};
    height: auto;
    max-width: 4200px;
    min-height: 100dvh;
    overflow: auto;
    margin: 0 auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
