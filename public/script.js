function getBotResponse(input) {
  const user_input = (input || '').toLowerCase();

  const boyTerms = ['boy', 'man', 'men', 'male', 'guy'];
  const girlTerms = ['girl', 'woman', 'women', 'female', 'lady'];

  const mentionsBoy = boyTerms.some(t => user_input.includes(t));
  const mentionsGirl = girlTerms.some(t => user_input.includes(t));

  // Keep exactly these behaviors:
  // - If user says boy-related word -> You are gay
  // - If user says girl-related word -> love you😘
  // - Otherwise -> ask: are you boy or a girl ?
  if (mentionsBoy && !mentionsGirl) return 'You are gay!';
  if (mentionsGirl && !mentionsBoy) return 'Love you😘';

  return 'Are you a boy or a girl ?';
}

// UI wiring
document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const textInput = document.getElementById('textInput');
  const nameInput = document.getElementById('nameInput');
  const controls = document.getElementById('controls');

  const statusLine = document.getElementById('statusLine');
  const clearBtn = document.getElementById('clearBtn');
  const charHint = document.getElementById('charHint');

  const MAX_CHARS = 2000;

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

  const sendBtn = document.getElementById('sendBtn');

  function setLoading(isLoading) {
    sendBtn.disabled = isLoading;
    sendBtn.dataset.loading = String(isLoading);
    if (isLoading) {
      sendBtn.textContent = 'Sending…';
      if (statusLine) statusLine.textContent = 'Thinking…';
    } else {
      sendBtn.textContent = 'Send';
      if (statusLine) statusLine.textContent = 'Ready';
    }
  }

  function clampAndUpdateHint() {
    if (!textInput) return;
    if (textInput.value.length > MAX_CHARS) {
      textInput.value = textInput.value.slice(0, MAX_CHARS);
    }
    if (charHint) charHint.textContent = `${textInput.value.length} / ${MAX_CHARS}`;
  }

  function autoGrow() {
    if (!textInput || textInput.tagName.toLowerCase() !== 'textarea') return;
    textInput.style.height = 'auto';
    textInput.style.height = `${textInput.scrollHeight}px`;
  }

  if (textInput && textInput.tagName && textInput.tagName.toLowerCase() === 'textarea') {
    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        controls.requestSubmit();
      }
    });

    textInput.addEventListener('input', () => {
      clampAndUpdateHint();
      autoGrow();
    });

    clampAndUpdateHint();
    autoGrow();
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (textInput) textInput.value = '';
      clampAndUpdateHint();
      autoGrow();
      textInput?.focus?.();
    });
  }

  controls.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = nameInput?.value?.trim() || ''; //add here name for like "User" or "You" if name is empty
    const text = textInput?.value?.trim() || ''; //add here bot or luboo as it is name for bot
    if (!text) return;

    appendMessage(`${name}: ${text}`, 'user');

    if (textInput) {
      textInput.value = '';
      clampAndUpdateHint();
      autoGrow();
    }

    setLoading(true);

    try {
      appendMessage(getBotResponse(text), 'bot');
    } finally {
      setLoading(false);
    }
  });
});

