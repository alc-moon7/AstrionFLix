// netlify/functions/getMaintenanceTime.js
export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' }),
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Calculate maintenance times (29 days from now in GMT)
    const now = new Date();
    const maintenanceStart = new Date(now.toISOString());
    const maintenanceEnd = new Date(now.toISOString());
    maintenanceEnd.setDate(maintenanceEnd.getDate() + 29);

    // Format dates for display
    const formatDate = (date) => {
      return date.toUTCString().replace('GMT', 'GMT');
    };

    const response = {
      maintenanceEnd: maintenanceEnd.toISOString(),
      maintenanceStart: maintenanceStart.toISOString(),
      isActive: true,
      serverTime: now.toISOString(),
      displayStart: formatDate(maintenanceStart),
      displayEnd: formatDate(maintenanceEnd),
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch maintenance time',
        message: error.message 
      }),
    };
  }
};