'use client';

import styled from 'styled-components';

type spacerType = {
  height: string;
};

export const _Spacer = styled.div<spacerType>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
`;
