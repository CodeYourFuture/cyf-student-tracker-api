// environments config

import * as dotenv from "dotenv";
// in case we need aws
import aws from "aws-sdk";

dotenv.config();
const config = {
  env: process.env.ENV,
  port: process.env.PORT,
  appUrl: process.env.APP_URL,
  studentTrackerClientUrl: process.env.STUDENT_TRACKER_CLIENT_URL,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    connection: process.env.DB_CONNECTION_STRING,
  },
  aws: {
    config: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
    },
    bucket: process.env.ASSETS_BUCKET,
  },
};

// in case we need aws
const SES_API_VERSION = "2010-12-01";
const ses = new aws.SES({ ...config.aws.config, apiVersion: SES_API_VERSION });

export { ses };
export default config;
