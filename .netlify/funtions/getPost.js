// netlify/functions/getPost.js
import { neon } from '@netlify/neon';

const sql = neon();

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const postId = event.queryStringParameters.id;

    if (!postId || isNaN(postId)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid post ID is required' }),
      };
    }

    // Using parameterized query for security
    const [post] = await sql`
      SELECT id, title, content, created_at, updated_at, author_id
      FROM posts 
      WHERE id = ${parseInt(postId)} AND published = true
    `;

    if (!post) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Post not found' }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(post),
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch post',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
};