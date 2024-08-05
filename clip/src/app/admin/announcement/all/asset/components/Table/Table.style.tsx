import styled from 'styled-components';

type DropdownItemType = {
  $isLast: boolean;
};

export const table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  margin: 1rem auto;
  border-radius: 0.4rem;
  border-style: hidden;
  box-shadow: 0 0 0 1px #ddd;
  font-family: 'Pretendard';
  overflow: auto;
`;

export const th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f9fafc;
  ${(props) => props.theme.FONT.Medium.B3};
  color: #828282;
  height: fit-content;
`;

export const status_wrap = styled.label`
  position: relative;
  width: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const drop = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 2.8rem;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 0.4rem;
  overflow: hidden;
  z-index: 5;
`;

export const menu = styled.div<DropdownItemType>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  ${(props) => (props.$isLast ? null : `border-bottom: 1px solid #828282`)};
  background-color: #fff;
`;
