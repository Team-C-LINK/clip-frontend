import styled from 'styled-components';

export const wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0dvh;
  width: 100%;
  height: 8rem;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  border-top: 1px solid #d9d9d9;
`;

export const navigation_content_wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const navigation_text = styled.div<{ $status: boolean }>`
  /* Regular/B4 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  /* identical to box height, or 133% */

  /* Text/02 */
  color: ${(props) => (props.$status ? '#790DE4' : '#6c6c6c')};
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const navigation_img = styled.img<{ $status: boolean }>`
  width: fit-content;
  height: fit-content;
  filter: ${(props) =>
    props.$status
      ? 'invert(14%) sepia(94%) saturate(7553%) hue-rotate(273deg) brightness(88%) contrast(106%)'
      : 'invert(44%) sepia(3%) saturate(2%) hue-rotate(339deg) brightness(92%) contrast(81%)'};
  background: url(${(props) => props.src});
`;
