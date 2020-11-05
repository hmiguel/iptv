const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {
    const fileName = event.queryStringParameters.q;

    console.log(fileName);

    fetch('' + fileName)
        .then (res => {
            callback(null, {
                statusCode: 302,
                headers: {
                    "Location": res.url
                }
            });
        });
};