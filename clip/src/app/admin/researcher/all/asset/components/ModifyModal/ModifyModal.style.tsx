import styled from 'styled-components';

type FileInputType = {
  $isExistFile: boolean;
};

type PreviewType = {
  $previewSrc?: string;
};

export const black_background = styled.div`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100dvw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const left_wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  width: 50%;
  height: 100%;
  &:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  width: 80rem;
  height: 65.6rem;
  left: calc(50% - 80rem / 2);
  top: calc(50% - 65.6rem / 2);
  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 3;
  overflow: hidden;
`;

export const input_wrap = styled.div`
  position: relative;
  width: fit-content;
  height: 7rem;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 0.6rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

export const index = styled.span`
  width: 7.4rem;
`;

export const input = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1.6rem;
  position: relative;
  width: 33.2rem;
  height: 4rem;
  background: #ffffff;
  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
  outline: none;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;

export const title = styled.span`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  top: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
  height: 7rem;
  border-bottom: 0.1rem solid #d9d9d9;
  background-color: #fff;

  z-index: 2;
`;

export const upload = styled.label`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  ${(props) => props.theme.FONT.SemiBold.B3};
  position: relative;
  width: 11.2rem;
  height: 4.4rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const selected_file = styled.div<FileInputType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.6rem;

  position: relative;
  width: 28.4rem;
  height: 4.4rem;

  background: #f2f2f2;
  border-radius: 4px;

  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => (props.$isExistFile ? `black` : '#BFBFBF')};
`;

export const sumbit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 12.5rem;
  height: 4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._04};

  background: ${(props) => props.theme.BACKGROUND._DARK};
  border-radius: 4px;
`;

export const cancel_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4.6rem;
  height: 4.6rem;
  right: 1.8rem;
  top: 1.2rem;

  border-radius: 10rem;
  cursor: pointer;
`;

export const preview = styled.div<PreviewType>`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 33.1rem;
  height: 23.1rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};

  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.$previewSrc ? `url(${props.$previewSrc})` : null};
  background-color: #f2f2f2;
  background-position: center;
  border-radius: 4px;
  color: #bfbfbf;
`;

export const upload_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 33.1rem;
  height: fit-content;
  gap: 1rem;
`;

export const button_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 33.2rem;
  gap: 2rem;
  top: 5rem;
`;

export const cancel_gray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 12.5rem;
  height: 4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._01};

  background: ${(props) => props.theme.BACKGROUND._DISABLE};
  border-radius: 4px;
`;
