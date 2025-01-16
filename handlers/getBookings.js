const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { successResponse, errorResponse } = require('../utils/response');

module.exports.handler = async () => {
  try {
    const params = {
      TableName: process.env.BOOKINGS_TABLE,
    };
    const data = await dynamoDB.scan(params).promise();
    return successResponse(data.Items);
  } catch (error) {
    return errorResponse('Error fetching bookings', error);
  }
};

