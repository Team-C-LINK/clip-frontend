type AnnouncementType = {
  id: number;
  isRecruiting: true;
  remainingDay: number;
  title: 'string';
  category: 'string';
  researcherAffiliation: 'string';
  researcherName: 'string';
  address: 'string';
  fee: number;
  isScraped: boolean;
};

export default AnnouncementType;
