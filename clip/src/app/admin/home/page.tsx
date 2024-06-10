'use client';

import getMemberList from '@/app/api/admin/get-memberList';
import patchModifyMember from '@/app/api/admin/patch-modifyMember';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const Home = () => {
  const [imageURL, setImageURL] = useState('');

  const { data: list } = useQuery({
    queryKey: ['list'],
    queryFn: getMemberList,
  });

  const test = async () => {
    const res = await patchModifyMember(1, 2);
    console.log(res);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  // useEffect(() => {
  //   const REGION = process.env.NEXT_PUBLIC_REGION;
  //   const ACESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  //   const SECRET_ACESS_KEY_ID = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;

  //   // AWS SDK 설정
  //   AWS.config.update({
  //     region: REGION,
  //     accessKeyId: ACESS_KEY_ID,
  //     secretAccessKey: SECRET_ACESS_KEY_ID,
  //   });

  //   const s3 = new AWS.S3();
  //   const params = {
  //     Bucket: 'clip-s3',
  //     Key: 'upload/메타몽.png', // 이미지 파일의 키
  //   };

  //   // S3에서 이미지 URL 가져오기
  //   s3.getSignedUrl('getObject', params, (err, url) => {
  //     if (err) {
  //       console.error('Error getting S3 image URL:', err);
  //     } else {
  //       setImageURL(url);
  //     }
  //   });
  // }, []);

  return (
    <>
      어드민 홈이다.
      <div onClick={test}>테스트 버튼</div>
      <div>{imageURL && <img src={imageURL} alt="S3 Image" />}</div>
    </>
  );
};

export default Home;
