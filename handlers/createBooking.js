const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');
const {successResponse, errorResponse} = require('../utils/response');

module.exports.handler = async (event) => {
    try{
        const requestBody = JSON.parse(event.body);
        const bookingId = uuidv4();
        const newBookingId = {
            bookingId,
            ...requestBody,
        };

        const params = {
            TableName: process.env.BOOKINGS_TABLE,
            Item: newBooking,
        }
        
        await dynamoDB.put(params).promise();
        return successResponse({message: 'Booking Creation Completed!!!', bookingId});
    } catch {
        return errorResponse('Error creating booking', error);
    }
    
};
