import AWS from 'aws-sdk';

export const uploadS3Multiple = (imageFiles: File[]) => {
  const REGION = process.env.NEXT_PUBLIC_REGION;
  const ACESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const SECRET_ACESS_KEY_ID = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACESS_KEY_ID,
    secretAccessKey: SECRET_ACESS_KEY_ID,
  });

  const s3 = new AWS.S3();

  imageFiles.forEach((image, idx) => {
    const params = {
      ACL: 'public-read',
      Bucket: 'clip-s3',
      Key: `upload/${image.name}`,
      Body: image,
    };

    s3.upload(params, (err: any, data: any) => {
      if (err) {
        console.log('에러', err);
        return;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
    });
  });
};
