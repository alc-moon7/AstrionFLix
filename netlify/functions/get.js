import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NETLIFY_DATABASE_URL);

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' }),
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const [settings] = await sql`
      SELECT maintenance_end, maintenance_start, is_active 
      FROM site_settings 
      WHERE id = 1
    `;

    if (!settings) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Maintenance settings not found' }),
      };
    }

    // Return GMT timestamps
    const response = {
      maintenanceEnd: settings.maintenance_end,
      maintenanceStart: settings.maintenance_start,
      isActive: settings.is_active,
      serverTime: new Date().toISOString(), 
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch maintenance time',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
};
