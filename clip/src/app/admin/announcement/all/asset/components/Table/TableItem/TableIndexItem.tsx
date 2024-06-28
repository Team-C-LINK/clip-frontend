import styled from 'styled-components';

type TableItemType = {
  $size: string;
};

const TableItem = ({ size, children }: { size: string; children: any }) => {
  return <Wrap $size={size}>{children}</Wrap>;
};

const Wrap = styled.span<TableItemType>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  width: ${(props) => props.$size};
  height: 2.2rem;
`;

export default TableItem;
