import styled from 'styled-components';

export const Calendar_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
`;
export const Calendar_unselected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
`;

export const Calendar_selected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  color: ${(props) => props.theme.TEXT._04};
  background: ${(props) => props.theme.PURPLE._00};
`;

export const Calendar_disable_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.TEXT._03};
`;

export const month_select_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  color: ${(props) => props.theme.TEXT._01};
`;

export const month_select_wrap_inner = styled.div`
  position: relative;
  display: flex;
  width: 13rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const notice_time = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
`;

export const dummy_div = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const input = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: ${(props) => props.width};
  height: 4rem;
  background: #ffffff;

  ${(props) =>
    props.src
      ? `background-image: url(${props.src});
  background-position: 1rem center;
  background-repeat: no-repeat;
  padding: 1.2rem 4.5rem
  `
      : `padding: 1.2rem 1.6rem`};

  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
  outline: none;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;

type SearchDropdown = {
  $size: string;
};

type DropdownItemType = {
  $isLast: boolean;
};

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
  overflow: auto;
  top: 5rem;
  z-index: 2;
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

export const input_wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 0.6rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;
