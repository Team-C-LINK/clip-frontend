import { atom } from 'recoil';

interface ResearcherModalInfoType {
  name: string;
  affiliation: string;
  email: string;
  id: number;
}

export const selectedResearcherState = atom<ResearcherModalInfoType>({
  key: 'selectedResearcher',
  default: { name: '', affiliation: '', email: '', id: -1 },
});
