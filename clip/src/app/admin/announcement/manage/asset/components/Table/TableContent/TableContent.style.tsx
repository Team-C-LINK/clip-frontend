import styled from 'styled-components';

export const td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

  text-align: left;
  background-color: #fff;
  z-index: 2;
  ${(props) => props.theme.FONT.Regular.B3};

  &:last-child {
    text-align: center;
  }
`;

export const tr = styled.tr`
  height: 1rem;
`;
