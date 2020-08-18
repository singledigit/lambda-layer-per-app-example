const aws = require('aws-sdk');
const data = require('/opt/nodejs/data');

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: {
      "Api Version": aws.VERSION,
      "color": data.color
    }
  }
}