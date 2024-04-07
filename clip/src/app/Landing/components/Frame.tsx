import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relatve;
  display: flex;
  width: 100dvw;

  flex-direction: column;
  gap: 5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LandingPageFrame = styled.div`
  position: relatve;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;
  overflow: scroll;
  gap: 0rem;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 5rem;
`;
