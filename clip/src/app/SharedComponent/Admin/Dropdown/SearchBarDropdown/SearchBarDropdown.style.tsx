import styled from 'styled-components';

type SearchDropdown = {
  $size: string;
};

export const DropdownWrapper = styled.div<SearchDropdown>`
  position: relative;
  width: ${(props) => props.$size};
  z-index: 5;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0px;
  ${(props) => props.theme.FONT.Medium.B3}
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  top: 4.5rem;
`;

export const DropdownItem = styled.span`
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #f0f0f0;
  }
`;
