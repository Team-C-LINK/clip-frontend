import Table from './Table/Table';

const dummy = [
  {
    name: '김연구1',
    affiliation: '어디일까',
    email: 'abc@defg.kr',
  },
  {
    name: '김연구2',
    affiliation: '어디일까',
    email: 'abc@defg.kr',
  },
  {
    name: '김연구3',
    affiliation: '어디일까',
    email: 'abc@defg.kr',
  },
  {
    name: '김연구4',
    affiliation: '어디일까',
    email: 'abc@defg.kr',
  },
  {
    name: '김연구5',
    affiliation: '어디일까',
    email: 'abc@defg.kr',
  },
];

const ResearcherModal = () => {
  return (
    <>
      <Table info={dummy}></Table>
    </>
  );
};

export default ResearcherModal;
