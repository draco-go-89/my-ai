// Browser UI now calls the secure backend /api/chat endpoint.

function getLegacyBotResponse(input) {
  // Keep the old deterministic responses as a fallback.
  const user_input = (input || "").toLowerCase().trim();
  const starters = ["Got it! ", "Okay. ", "Sure. ", "Understood. "];
  const endings = [
    "Tell me more.",
    "What do you want to do next?",
    "Can you share a bit more detail?",
    "What’s your goal?"
  ];
  return starters[Math.floor(Math.random() * starters.length)] + endings[Math.floor(Math.random() * endings.length)];
}

document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const textInput = document.getElementById('textInput');
  const nameInput = document.getElementById('nameInput');
  const controls = document.getElementById('controls');
  const sendBtn = document.getElementById('sendBtn');

  function appendMessage(text, who) {
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    el.appendChild(bubble);
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function setLoading(isLoading) {
    sendBtn.disabled = isLoading;
    sendBtn.dataset.loading = String(isLoading);
    if (isLoading) sendBtn.textContent = 'Sending…';
    else sendBtn.textContent = 'Send';
  }

  controls.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim() || 'Friend';
    const text = textInput.value.trim();
    if (!text) return;

    appendMessage(`${name}: ${text}`, 'user');
    textInput.value = '';

    setLoading(true);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await resp.json();
      const reply = data?.reply || data?.error || 'No response was generated.';
      appendMessage(`Bot: ${reply}`, 'bot');
    } catch (e2) {
      appendMessage(`Bot: ${getLegacyBotResponse(text)}`, 'bot');
    } finally {
      setLoading(false);
    }
  });
});

