import styled from 'styled-components';

export const list_wrap = styled.div`
  position: relative;
  width: 100%;
  height: 69rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0.1rem;
  margin-top: 1.5rem;
`;

export const register_announcement = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  right: 0rem;
  top: 10rem;
  width: 14.2rem;
  height: 4.2rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10rem;
  cursor: pointer;
`;

export const register_announcement_wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  right: 0rem;
  top: 0rem;
  background: #ffffff;
  cursor: pointer;
`;

export const page_index_wrap = styled.div`
  width: 78.3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
`;

export const page_index = styled.span`
  cursor: pointer;
`;

export const filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  height: 6rem;
`;

export const filter_item_unselected = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  color: ${(props) => props.theme.TEXT._05};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  align-items: center;
  gap: 4px;

  width: fit-content;
  height: 4rem;

  background: #ffffff;

  border: 1px solid #d9d9d9;
  border-radius: 999px;

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;
`;

export const filter_item_selected = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  color: ${(props) => props.theme.TEXT._05};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  align-items: center;
  gap: 4px;

  width: fit-content;
  height: 4rem;

  background: #790de4;
  color: ${(props) => props.theme.TEXT._04};

  border-radius: 999px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const total = styled.span`
  position: absolute;
  top: 20rem;
  ${(props) => props.theme.FONT.Regular.B3};
`;
