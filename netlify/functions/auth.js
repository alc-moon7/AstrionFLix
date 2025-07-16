const { Pool } = require('pg');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    const { username, password } = JSON.parse(event.body);
    
    // Predefined user credentials (username: password)
    const validCredentials = {
        'sraboni': '123456',
        'Sraboni': '123456',
        'moon': '123456',
        'Moon': '123456',
        'Premium': '123456',
        'premium': '123456',
    };

    if (validCredentials[username] && validCredentials[username] === password) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, username })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: 'Invalid username or password' })
        };
    }
};