type AnnouncementType = {
  id: number;
  isRecruiting: true;
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
