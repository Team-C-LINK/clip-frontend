import { atom } from 'recoil';

type ResearcherType = {
  [key: string]: string | number;
  id: number;
  name: string;
  affiliation: string;
  email: string;
  researchField: string;
  detailAddress: string;
  profile: string;
};

export const researcherListState = atom<ResearcherType[]>({
  key: 'researcherList',
  default: [],
});
