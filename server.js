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
  // Single HTML entrypoint
  res.sendFile(new URL('./public/index.html', import.meta.url).pathname);
});


app.post('/api/chat', async (req, res) => {
  // API key intentionally disabled for now.
  // Frontend will fall back to its local (legacy) responses if this returns an error.
  try {
    const { message } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' });
    }

    return res
      .status(503)
      .json({ error: 'Server LLM is disabled (API key removed for now).' });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

