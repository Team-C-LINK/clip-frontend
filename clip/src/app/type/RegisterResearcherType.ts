type RegisterResearcherType = {
  [key: string]: string | File[] | number;
  name: string;
  affiliation: string;
  email: string;
  researchField: string;
  detailAddress: string;
  profile: string | File[];
};

export default RegisterResearcherType;
