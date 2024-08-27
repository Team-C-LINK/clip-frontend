type AgeDistributionType = {
  age: number;
  type: string;
  gender: string;
  count: number;
};

type PostType = {
  isScraped: true;
  fee: number;
  isRecruiting: true;
  category: string;
  title: string;
  endDate: string;
  image: string;
  remainingDay: number;
  researchLocation: string;
  researchAvailableTime: string;
  recruitmentDistributionResponses: AgeDistributionType[];
  applicationConditions: string[];
  content: string;
  researcherName: string;
  researcherAffiliation: string;
  researcherEmail: string;
  researchField: string;
  researcherAddress: string;
  registerLink: string;
};

export default PostType;
