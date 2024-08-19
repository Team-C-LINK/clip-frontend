import { FileList } from 'aws-sdk/clients/codecommit';
import { atom } from 'recoil';

export const imageFileState = atom<File[]>({
  key: 'imageFileState',
  default: [],
  dangerouslyAllowMutability: true,
});
