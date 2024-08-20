import { atom } from 'recoil';

type AnnouncementWriteModalStateType = {
  [key: string]: boolean;
  reseracherModalState: boolean;
  calendarModalState: boolean;
};

export const announcementModalStateWriteModify =
  atom<AnnouncementWriteModalStateType>({
    key: 'annoucementModalStateWriteModify',
    default: {
      reseracherModalState: false,
      calendarModalState: false,
    },
  });
