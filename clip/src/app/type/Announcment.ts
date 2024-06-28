type AnnouncementType = {
  [key: string]: number | boolean | string;
  id: number;
  isRecruiting: boolean;
  remainingDay: number;
  title: string;
  category: string;
  researcherAffiliation: string;
  researcherName: string;
  address: string;
  fee: number;
  reservationStatus: string;
  reservationDate: string;
  isScraped: boolean;
};

export default AnnouncementType;
