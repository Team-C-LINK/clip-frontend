import styled from 'styled-components';

export const Frame = styled.div`
  position: relatve;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LandingPageFrame = styled.div`
  position: relatve;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  overflow: scroll;
  gap: 0rem;
  left: 50%;
  tranform: translateX(-50%);
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 5rem;
`;
