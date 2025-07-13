const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    try {
        const filePath = path.join(__dirname, 'style.css');
        const css = fs.readFileSync(filePath, 'utf8');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/css',
            },
            body: css,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error loading CSS file',
        };
    }
};
