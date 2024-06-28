import { atom } from 'recoil';

const test: { [key: string]: boolean } = {
  first: false,
  second: false,
  third: false,
};

export const ModalState = atom({
  key: 'ModalState',
  default: test,
});
