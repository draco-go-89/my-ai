import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// helpful debug (disable/remove after confirming setup)
// console.log('GEMINI_API_KEY configured:', !!process.env.GEMINI_API_KEY);

const app = express();

app.use(express.json());

app.use(express.static('public'));




app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});


app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
    }

    // Gemini REST call (API key stays on the server)
// Note: model id must match what your Google AI project supports.
// Defaulting to gemini-1.5-flash; change if your account doesn't allow it.
const MODEL_ID = process.env.GEMINI_MODEL_ID || 'gemini-1.5-flash';
const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL_ID}:generateContent?key=${apiKey}`;

    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 500
      }
    };

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(502).json({ error: 'Gemini API request failed', details: data });
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('') || '';

    return res.json({ reply: text || 'No response was generated.' });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

