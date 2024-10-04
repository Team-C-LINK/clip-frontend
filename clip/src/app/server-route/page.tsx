import getRecruitList from '../api/get-recruitList';

const Server = async () => {
  const data = await getRecruitList();

  console.log('서버데이터', data);

  console.log('여기');
  return <>서버 컴포넌트</>;
};

export default Server;
