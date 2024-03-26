import styled from 'styled-components';
export const ProgressBar = styled.div`
  /* progress bar */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.4rem;
  margin-top: 7dvh;
  position: relative;
  width: 91dvw;
  height: fit-content;
`;

export const ProgressBarInner = styled.div`
  /* Rectangle 67 */

  position: relative;

  width: 17.3dvw;
  height: 0.4rem;

  /* Purple/01 */
  background: ${(props) => props.color};

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
`;
