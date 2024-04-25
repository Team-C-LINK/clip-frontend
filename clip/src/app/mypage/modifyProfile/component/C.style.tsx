import styled from 'styled-components';

type dropbox = {
  $src: string;
  $size: string;
};

type profileWrap = {
  $gap: string;
};

export const view_wrap = styled.div`
  position: relative;
  width: 91.1%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const auth_wrap = styled.div`
  /* input field */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  position: relative;
  width: 91.1%;
  height: fit-content;
  top: 3rem;
`;

export const footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  background-color: #fff;
`;

export const profile_image = styled.img`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  margin-top: 1.6rem;
`;

export const profile_wrap = styled.div<profileWrap>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  width: 100%;
  gap: ${(props) => props.$gap};
  background: #fff;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
`;

export const profile_content_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.8rem;
  gap: 3.2rem;
  align-items: center;
`;

export const profile_content_tag = styled.span`
  width: 5.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #616161;
`;

export const profile_content_info = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;

  color: #252525;
`;

export const profile_modify_btn = styled.div`
  position: absolute;
  right: 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  width: 7rem;
  height: 2.6rem;
  background: #f9fafc;
  border: 0.1rem solid #d9d9d9;
  border-radius: 0.2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;

  color: #616161;
`;

export const Dropdown = styled.select<dropbox>`
  /*  Check list */

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  width: ${(props) => props.$size};
  height: 4.4rem;

  background: url(${($props) => $props.$src}) no-repeat right 0.5rem center;
  background-color: #f9fafc;
  color: #000;
  border: 0.1rem solid #d9d9d9;
  border-radius: 0.4rem;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;

  /* Text/02 */

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  appearance: none;

  outline: none;
`;

export const dropdown_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 70%;
  height: fit-content;
  gap: 4%;
`;

export const profile_image_modify = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0rem;
  bottom: 0%;
  width: 3.2rem;
  height: 3.2rem;
  background: #1d2939;
  border-radius: 50%;
o
  cursor: pointer;
`;

export const profile_image_modify_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
