const { Pool } = require('pg');

exports.handler = async (event) => {
    // Add CORS headers for web browser compatibility
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle OPTIONS request for CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow POST method
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Check if body exists and parse it safely
        if (!event.body) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Request body is missing' })
            };
        }

        const { username, password } = JSON.parse(event.body);
        
        // Validate required fields
        if (!username || !password) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Username and password are required' })
            };
        }

        // Predefined user credentials (case-sensitive)
        const validCredentials = {
            'sraboni': '123456',
            'Sraboni': '123456',
            'moon': '123456',
            'Moon': '123456',
            'Premium': '123456',
            'premium': '123456',
            'Guest': '123456',
            'guest': '123456',
        };

        // Check credentials
        if (validCredentials[username] && validCredentials[username] === password) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ 
                    success: true, 
                    username,
                    message: 'Login successful'
                })
            };
        } else {
            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ error: 'Invalid username or password' })
            };
        }

    } catch (error) {
        console.error('Error processing request:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Internal server error',
                details: error.message 
            })
        };
    }
};