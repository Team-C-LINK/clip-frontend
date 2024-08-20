import Table from './Table/Table';
import { useQuery } from '@tanstack/react-query';
import getResearcherList from '@/app/api/admin/get-researcherList';
import { useEffect } from 'react';

const ResearcherModal = () => {
  const { data: info } = useQuery({
    queryKey: [''],
    queryFn: getResearcherList,
  });

  return (
    <>
      <Table info={info?.researchers}></Table>
    </>
  );
};

export default ResearcherModal;
