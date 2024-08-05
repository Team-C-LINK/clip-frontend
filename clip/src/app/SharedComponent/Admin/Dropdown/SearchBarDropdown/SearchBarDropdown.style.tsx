import styled from 'styled-components';

type SearchDropdown = {
  $size: string;
};

type DropdownItemType = {
  $isLast: boolean;
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
  height: fit-content;
  ${(props) => props.theme.FONT.Medium.B3}
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow: hidden;
  top: 4.5rem;
`;

export const DropdownItem = styled.span<DropdownItemType>`
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  ${(props) => (props.$isLast ? null : `border-bottom: 1px solid #D9D9D9`)};
  &:hover {
    background-color: ${(props) => props.theme.PURPLE._04};
    color: ${(props) => props.theme.PURPLE._00};
  }
`;
