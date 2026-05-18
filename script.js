function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getBotResponse(input) {
  const user_input = (input || "").toLowerCase().trim();

  // Greetings / slang
  if ([
    'hello', 'hi', 'hey', 'greetings', 'yo', 'sup', 'heyyo', 'hiya', 'howdy',
    'what up', 'whatup', 'fam', 'bruh', 'dude', 'mate'
  ].some(w => user_input.includes(w))) {
    return rand([
      "Yo yo! What’s up? 😄",
      "Sup fam! What’s the move today? 👀",
      "Hey! How’s your day going?",
      "Hi there! Need help with anything?",
      "Hello! Come talk to me—easy vibes only 😌",
      "Hey hey! Tell me what’s on your mind 👀",
      "Yo! I’m here. Shoot your question!",
      "Hello! I’m your friendly chatbot—let’s go 🚀",
      "What up, dude? Talk to me! 🤝",
      "Howdy! You here for jokes or questions? 😄",
      "Yo! I missed this convo (kinda). What’s up? 😂"
    ]);
  }

  // How are you
  if ([
    "how are you", "how do you do", "how's it going", "how is it going",
    "u good", "you good", "you alright", "how you doing"
  ].some(p => user_input.includes(p))) {
    return rand([
      "I’m doing great—thanks for asking! 😊",
      "I’m chillin’ 😌 Ready to help you.",
      "All good! You bringing good vibes or chaos today? 😄",
      "Fantastic! Quick question: what are we doing today?",
      "Doing well! Let’s make it a W day. 💪",
      "Ngl I’m vibing. What about you? 👀"
    ]);
  }

  // Joke / funny
  if ([
    'joke', 'funny', 'lol', 'lmao', 'roast', 'meme', 'cringe', 'lolf',
    'yeet', 'hehe', 'fun', 'laugh'
  ].some(w => user_input.includes(w))) {
    return rand([
      "Why did the computer get cold? …Because it left its Windows open! 😂",
      "I tried to catch fog yesterday. Mist.akes were made. 😭",
      "Why don’t skeletons fight each other? They don’t have the guts. 💀",
      "I’m reading a book on anti-gravity. It’s impossible to put down. 📚✨",
      "Why did the math book look sad? Because it had too many problems. 😅",
      "Why did the scarecrow win an award? Because he was outstanding in his field. 🌾",
      "I would tell you a UDP joke… but you might not get it. 😄",
      "Bruh I told a joke to my keyboard… now it keeps autocorrecting my punchlines 🤣",
      "Want a joke? Here’s one: you’re doing awesome. (See? Easy.) 😌",
      "If laughter was money, you’d be the richest person in the group. 😂"
    ]);
  }

  // What can you do / help
  if ([
    'what can you do', 'what you do', 'what do you do',
    'help me', 'how to', 'commands', 'how do i', 'what can i ask'
  ].some(p => user_input.includes(p))) {
    return rand([
      "I can chat, answer simple questions, and help you brainstorm. 😄",
      "I’m basically your friendly sidekick—ask me anything!",
      "Tell me what you need and I’ll try to help, fam. 🤝",
      "I can do quick answers, jokes, and simple suggestions. What do you want?",
      "I’m a vibe + info machine. What’s the mission? 🚀"
    ]);
  }

  // About the bot
  if ([
    'who are you', 'what are you', 'your name', 'about you', 'who r u', 'bot'
  ].some(w => user_input.includes(w))) {
    return rand([
      "I’m your AI assistant—here to chat and help. 😄",
      "I’m the friendly chatbot living in your browser. No big drama, just vibes.",
      "I’m here to answer questions, tell jokes, and keep the convo moving. 🚀",
      "I’m a simple demo bot—smart-ish, funny-ish. You’ll survive. 😄",
      "I’m like a helpful friend… but with Wi‑Fi. ✨"
    ]);
  }

  // Thanks / appreciation
  if ([
    'thank', 'thanks', 'thx', 'appreciate', 'ty', 'tysm', 'grateful', 'much'
  ].some(w => user_input.includes(w))) {
    return rand([
      "You’re welcome! 😊",
      "No problem at all!",
      "Happy to help! What’s next? 😄",
      "Anytime! I got you, fam 🤝",
      "My pleasure! Let’s keep going.",
      "W—thanks for saying that! ❤️",
      "Glad I could help. You’re awesome too! ✨",
      "Thank you back! You’re the best fr. 😄"
    ]);
  }

  // Goodbye
  if ([
    'bye', 'goodbye', 'see you', 'later', 'cya', 'ttyl', 'exit', 'quit'
  ].some(w => user_input.includes(w))) {
    return rand([
      "Bye! It was nice chatting with you 👋",
      "Take care! Come back soon 😄",
      "See you later, fam! ✌️",
      "Alright alright—later! Keep it easy 😌",
      "Peace out! Don’t be a stranger. 🤝"
    ]);
  }

  // Help request
  if ([
    'help', 'assist', 'support', 'can you help', 'help me', 'i need help', 'please help'
  ].some(w => user_input.includes(w))) {
    return rand([
      "Sure thing 😄 Ask me anything—questions, ideas, or just jokes.",
      "I can help with simple answers and friendly chat. What do you need?",
      "Tell me your question and I’ll do my best. 🤝",
      "I’m on it. Drop the problem, fam. 👀"
    ]);
  }

  // Slang triggers (friendly)
  if ([
    'bruh', 'fam', 'fr', 'ong', 'ngl', 'frfr', 'idk', 'w', 'l', 'yeet', 'rip', 'no cap', 'cap'
  ].some(w => user_input.includes(w))) {
    return rand([
      "Real talk 😄 Tell me more.",
      "Ngl, that’s kinda interesting 👀",
      "W response. What’s the next move?",
      "Frfr—okay okay, I’m listening 👂",
      "Yeet! Lemme help you with that 😂",
      "Bruh, say less. What do you want to ask? 😄",
      "No cap—this convo is actually going somewhere. 🚀"
    ]);
  }

  // Small talk (easy/common words)
  if ([ 'weather', 'rain', 'sun', 'hot', 'cold' ].some(w => user_input.includes(w))) {
    return rand([
      "Weather check: rain outside? cozy inside vibes ☔️",
      "Honestly… weather is always doing the most 😭",
      "Sun’s cute, but I’m still here for the chat 😄"
    ]);
  }

  if ([ 'food', 'hungry', 'eat', 'snack', 'pizza', 'burger' ].some(w => user_input.includes(w))) {
    return rand([
      "Food talk? Respect. What are you craving? 🍕",
      "If you’re hungry, I’m hungry for that info too 😂",
      "Snack check: what’s your go-to?"
    ]);
  }

  if ([ 'sleep', 'tired', 'nap', 'wake up' ].some(w => user_input.includes(w))) {
    return rand([
      "Sleep is valid. Do a quick nap, then come back 😌",
      "Tired? Same. But we ballin’—one message at a time 😂",
      "Go rest if you can. I’ll still be here when you wake. ✨"
    ]);
  }

  if ([ 'music', 'song', 'spotify', 'listen' ].some(w => user_input.includes(w))) {
    return rand([
      "Music time? Drop the vibe—chill or hype? 🎧",
      "I don’t pick songs… you do. But I judge your playlist lovingly 😄",
      "What’s the last song you couldn’t stop listening to?"
    ]);
  }

  // Default
  const starters = [
    "Got it! ", "Nice! ", "Okay! ", "Cool! ", "Bet! ",
    "Oof—interesting. ", "Wait—tell me more. ", "Hmm. ",
    "Alright then. ", "Real quick: ", "So basically: "
  ];

  const endings = [
    "What do you mean? 😄",
    "What happened next?",
    "Do you want advice or just vibes?",
    "Give me a bit more detail, fam.",
    "Keep going—I'm listening 👀",
    "Say more. I’m here.",
    "Any examples?",
    "What’s your goal?",
    "How do you feel about it?",
    "Do you want a joke too? 😄",
    "Wanna keep it simple, or go deeper?"
  ];

  return `${rand(starters)}${rand(endings)}`;
}

// UI wiring
document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const textInput = document.getElementById('textInput');
  const nameInput = document.getElementById('nameInput');
  const controls = document.getElementById('controls');

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

  controls.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim() || 'Friend';
    const text = textInput.value.trim();
    if (!text) return;

    appendMessage(`${name}: ${text}`, 'user');
    textInput.value = '';

    setTimeout(() => {
      const reply = getBotResponse(text);
      appendMessage(`Bot: ${reply}`, 'bot');
    }, 200);
  });
});

