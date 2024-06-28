import { atom } from 'recoil';

const dropdownState: { [key: string]: boolean } = {
  header_1: false,
  header_2: false,
  header_3: false,
  header_4: false,
  searchBar_1: false,
  searchBar_2: false,
  searchBar_3: false,
};

export const dropdownOpenState = atom({
  key: 'dropdownOpenState',
  default: dropdownState,
});
