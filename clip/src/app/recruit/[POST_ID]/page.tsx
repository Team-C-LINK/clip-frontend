'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';

const RecruitDetail = () => {
  const params = useParams();

  return (
    <>
      {params.POST_ID}
      <div>안녕 난 공고 상세 페이지라고 해</div>
    </>
  );
};

export default RecruitDetail;
