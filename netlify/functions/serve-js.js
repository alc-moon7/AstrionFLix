const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    try {
        const filePath = path.join(__dirname, 'script.js');
        const js = fs.readFileSync(filePath, 'utf8');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/javascript',
            },
            body: js,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error loading JS file',
        };
    }
};
