import { ImageFile, ImageFileData } from 'aws-sdk/clients/iotsitewise';
import AWS from 'aws-sdk';

export const uploadS3 = (imageFiles: File) => {
  const REGION = process.env.NEXT_PUBLIC_REGION;
  const ACESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const SECRET_ACESS_KEY_ID = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACESS_KEY_ID,
    secretAccessKey: SECRET_ACESS_KEY_ID,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      ACL: 'public-read',
      Bucket: 'clip-s3',
      Key: `upload/${imageFiles.name}`,
      Body: imageFiles,
    },
  });

  try {
    upload.promise().then((res) => {
      console.log('업로드');
    });
  } catch (e) {
    console.log(e);
  }
};
