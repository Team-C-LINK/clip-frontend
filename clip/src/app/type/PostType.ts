type AgeDistributionType = {
  age: number;
  type: string;
  gender: string;
  count: number;
};

type PostType = {
  isScraped: true;
  isRecruiting: true;
  category: 'string';
  title: 'string';
  endDate: 'string';
  image: string;
  remainingDay: number;
  researchLocation: 'string';
  researchAvailableTime: 'string';
  recruitmentDistributionResponses: AgeDistributionType[];
  applicationConditions: string[];
  content: 'string';
  researcherName: 'string';
  researcherAffiliation: 'string';
  researcherEmail: 'string';
  researchField: 'string';
  researcherAddress: 'string';
};

export default PostType;
