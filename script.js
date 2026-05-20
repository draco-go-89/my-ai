function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getBotResponse(input) {
  const user_input = (input || "").toLowerCase().trim();

  // Basic greetings / help
  if (["hello", "hi", "hey", "greetings", "howdy"].some(w => user_input.includes(w))) {
    return rand([
      "Hello! How can I help?",
      "Hi! What can I do for you today?",
      "Hey! What would you like to talk about?"
    ]);
  }

  // How are you
  if ([
    "how are you", "how do you do", "how's it going", "how is it going",
    "you good", "u good", "how you doing"
  ].some(p => user_input.includes(p))) {
    return rand([
      "I’m doing well. How can I help?",
      "I’m fine. What do you need today?",
      "I’m doing good. What’s on your mind?"
    ]);
  }

  // What can you do / help
  if ([
    "what can you do", "what you do", "help me", "how to", "commands", "what can i ask"
  ].some(p => user_input.includes(p))) {
    return rand([
      "I can answer questions and help you with ideas.",
      "Tell me what you need and I’ll try to help.",
      "Ask your question and I’ll respond."
    ]);
  }

  // About the bot
  if (["who are you", "what are you", "your name", "about you", "bot"].some(w => user_input.includes(w))) {
    return rand([
      "I’m a simple AI assistant for this chatbot demo.",
      "I’m here to help you chat and find answers.",
      "I’m a basic chatbot running in your browser."
    ]);
  }

  // Thanks
  if (["thank", "thanks", "appreciate", "ty", "much"].some(w => user_input.includes(w))) {
    return rand([
      "You’re welcome!",
      "No problem.",
      "Glad I could help."
    ]);
  }

  // Goodbye
  if (["bye", "goodbye", "see you", "later", "exit", "quit"].some(w => user_input.includes(w))) {
    return rand([
      "Bye! Take care.",
      "Goodbye! Come back soon.",
      "See you later."
    ]);
  }

  // Help request
  if (["help", "assist", "support", "please help", "i need help"].some(w => user_input.includes(w))) {
    return rand([
      "What do you need help with?",
      "Tell me your problem and I’ll help.",
      "Ask your question and I’ll respond."
    ]);
  }

  // Small talk (neutral)
  if (["weather", "rain", "sun", "hot", "cold"].some(w => user_input.includes(w))) {
    return rand([
      "Weather is always changing. What’s the forecast where you are?",
      "Is it raining or sunny for you right now?"
    ]);
  }

  if (["food", "hungry", "eat", "snack", "pizza", "burger"].some(w => user_input.includes(w))) {
    return rand([
      "What are you craving?",
      "What do you want to eat today?"
    ]);
  }

  if (["music", "song", "listen", "spotify"].some(w => user_input.includes(w))) {
    return rand([
      "What kind of music do you like?",
      "What song are you listening to right now?"
    ]);
  }

  // Knowledge: common questions
  if (["what is computer", "computer what is", "what is a computer"].some(p => user_input.includes(p))) {
    return rand([
      "A computer is an electronic device that processes information and runs programs.",
      "A computer takes input, processes it, stores data, and produces output."
    ]);
  }

  if (["what is github", "github what is", "github", "what is github.com"].some(p => user_input.includes(p))) {
    return rand([
      "GitHub is a website for hosting and collaborating on code using Git.",
      "GitHub helps developers store repositories, review code, and manage teamwork."
    ]);
  }

  if (["who is", "who's", "who is the"].some(p => user_input.includes(p))) {
    if (user_input.includes("greatest footballer") || user_input.includes("best footballer")) {
      return "Greatest footballer is debated. Common picks include Lionel Messi and Cristiano Ronaldo, based on goals and overall impact.";
    }
    if (user_input.includes("greatest musician") || user_input.includes("best musician")) {
      return "Greatest musician is also subjective. Many people cite artists like Michael Jackson, Prince, or The Beatles depending on genre and impact.";
    }
  }

  if (["where is", "what is capital"].some(p => user_input.includes(p))) {
    return "Tell me the country or place you mean, and I’ll try to answer.";
  }

  // Default
  const starters = ["Got it! ", "Okay. ", "Sure. ", "Understood. "];
  const endings = [
    "Tell me more.",
    "What do you want to do next?",
    "Can you share a bit more detail?",
    "What’s your goal?"
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

