const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {
    fetch('http://127.0.0.1:8080/iptv/channels')
        .then(res => res.json())
        .then(res => callback(null, {
            statusCode: 200,
            body: JSON.stringify(res)
        }));
};