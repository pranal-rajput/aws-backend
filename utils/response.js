module.exports.successResponse = (data) => ({
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  module.exports.errorResponse = (message, error) => ({
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, error: error.message }),
  });
  