'use strict'

exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: "Ciao, from Mia-Platform!"
  };
  return response;
};
