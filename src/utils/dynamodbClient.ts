import { DynamoDB } from "aws-sdk";


const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: 'adcde',
  secretAccessKey: 'abced'
}

export const document = new DynamoDB.DocumentClient(options);