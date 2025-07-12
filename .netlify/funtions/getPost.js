// netlify/functions/getPost.js
import { neon } from '@netlify/neon';

// This will pull from your .env or Netlify env vars
const sql = neon(); // Uses NETLIFY_DATABASE_URL internally

export const handler = async (event) => {
  const postId = event.queryStringParameters.id;

  try {
    const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
    return {
      statusCode: 200,
      body: JSON.stringify(post),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};