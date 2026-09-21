const http = require('http');

const PORT = 3001;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const SYSTEM_PROMPT = `
You are SOLO AI Assistant, an AI assistant for learners using the SOLO platform.

SOLO helps learners:
- Discover learning opportunities
- Learn new skills
- Build practical skills
- Prove skills through credentials and badges
- Explore career pathways
- Find internships, projects, jobs and other opportunities
- Create and improve resumes
- Build a professional learner profile
- Showcase skills and verified credentials

Your job is to answer learner questions clearly and simply.

Rules:
1. Be helpful and encouraging.
2. Keep answers concise unless the learner asks for detail.
3. Explain technical concepts in simple language.
4. If the question is about SOLO, explain the relevant SOLO feature.
5. Do not invent SOLO features.
6. If you don't know something about SOLO, say so.
7. You can also answer general student, learning, career and technology questions.
`;

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });

    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/chat') {
    sendJSON(res, 404, {
      error: 'Not found',
    });

    return;
  }

  if (!GROQ_API_KEY) {
    sendJSON(res, 500, {
      error: 'GROQ_API_KEY is not configured.',
    });

    return;
  }

  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      const parsedBody = JSON.parse(body);

      const message = parsedBody.message?.trim();

      if (!message) {
        sendJSON(res, 400, {
          error: 'Message is required.',
        });

        return;
      }

      const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },

          body: JSON.stringify({
            model: 'openai/gpt-oss-120b',

            messages: [
              {
                role: 'system',
                content: SYSTEM_PROMPT,
              },
              {
                role: 'user',
                content: message,
              },
            ],

            temperature: 0.5,
            max_tokens: 500,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Groq API error:', data);

        sendJSON(res, response.status, {
          error:
            data?.error?.message ||
            'The Groq API returned an error.',
        });

        return;
      }

      const reply =
        data?.choices?.[0]?.message?.content ||
        'Sorry, I could not generate a response.';

      sendJSON(res, 200, {
        reply,
      });
    } catch (error) {
      console.error('Server error:', error);

      sendJSON(res, 500, {
        error: 'Unable to process your request.',
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`SOLO AI server running at http://localhost:${PORT}`);
});