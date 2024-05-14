import styled, { keyframes } from 'styled-components';

type isVisibleType = {
  $isVisible: boolean;
};

const slideIn = keyframes`
  from {
    transform: translateY(-105%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-105%);
  }
`;

export const view_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
`;
