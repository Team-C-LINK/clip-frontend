import styled from 'styled-components';

interface color {
  color: string;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: fit-content;
  gap: 5rem;
`;

export const auth_wrap = styled.div`
  /* input field */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  position: relative;
  width: 91.1dvw;
  height: fit-content;
`;

export const authsend_text = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: left;
  color: #ff0000;
`;

export const phoneNumber_wrap = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 91.1dvw;
  height: 5.6rem;

  border-bottom: 0.1rem solid #d9d9d9;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const phoneNumber = styled.input.attrs({ type: 'text' })`
  position: relative;
  //styleName: Regular/B1;
  border: 0;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  text-align: left;
  color: #252525;
  outline: none;
`;

export const getAuth = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  gap: 0.8rem;

  width: 25dvw;
  height: 4rem;

  color: #252525;
  cursor: pointer;
  border: 0.1rem solid #d9d9d9;
  border-radius: 0.2rem;
`;

export const getAuthDisable = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  gap: 0.8rem;

  width: 25dvw;
  height: 4rem;

  color: #bfbfbf;

  border: 0.1rem solid #d9d9d9;
  border-radius: 0.2rem;
`;
