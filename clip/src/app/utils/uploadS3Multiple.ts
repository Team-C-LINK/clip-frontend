import AWS from 'aws-sdk';

export const uploadS3Multiple = async (imageFiles: File[]) => {
  const REGION = process.env.NEXT_PUBLIC_REGION;
  const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const SECRET_ACESS_KEY_ID = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;

  const imageList = [];

  AWS.config.update({
    region: REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACESS_KEY_ID,
  });

  const s3 = new AWS.S3();

  for (const image of imageFiles) {
    const params = {
      ACL: 'public-read',
      Bucket: 'clip-s3',
      Key: `upload/${image.name}`,
      Body: image,
    };

    const stored = await s3
      .upload(params, (err: any, data: any) => {
        if (err) {
          console.log('에러', err);
          return;
        }
        return data;
      })
      .promise();

    imageList.push(stored.Location);
  }

  return imageList;
};
