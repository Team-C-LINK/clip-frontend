import { atom } from 'recoil';

export interface AnnouncementInfoType {
  title: string;
  researcherId: number;
  city: string;
  district: string;
  detailAddress: string;
  applicationConditions: string[];
  content: string;
  image: string;
  fee: number;
  type: string;
  endDate: string;
  registerLink?: string;
}

export const announceInfoState = atom<AnnouncementInfoType>({
  key: 'announceInfoState',
  default: {
    title: '',
    researcherId: 0,
    city: '',
    district: '',
    detailAddress: '',
    applicationConditions: [],
    content: '',
    image: '',
    fee: 0,
    registerLink: '',
    type: '',
    endDate: '',
  },
});
