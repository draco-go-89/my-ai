function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

function getBotResponse(input){
  const user_input = input.toLowerCase();

  // Greetings
  if(['hello','hi','hey','greetings'].some(w=>user_input.includes(w))){
    return rand([
      "Hello there! How can I help you today?",
      "Hi! Nice to see you! What would you like to talk about?",
      "Hey! I'm here to help. What's on your mind?"
    ]);
  }

  // How are you
  if(["how are you","how do you do","how's it going"].some(p=>user_input.includes(p))){
    return rand([
      "I'm doing great, thank you for asking!",
      "I'm doing well! Ready to help you with anything you need.",
      "Fantastic! Always happy to chat with you!"
    ]);
  }

  // About the bot
  if(["who are you","what are you","your name","about you"].some(w=>user_input.includes(w))){
    return "I'm your AI assistant — a simple static demo ported from Python.";
  }

  // Goodbye
  if(['bye','goodbye','see you','later'].some(w=>user_input.includes(w))){
    return rand([
      "Goodbye! It was great chatting with you!",
      "Take care! Come back soon!",
      "Bye for now! Hope to talk again soon!"
    ]);
  }

  // Help
  if(['help','assist','support'].some(w=>user_input.includes(w))){
    return "I'd be happy to help! Ask me general questions, or just chat.";
  }

  // Thanks
  if(['thank','thanks','appreciate'].some(w=>user_input.includes(w))){
    return rand([
      "You're welcome!",
      "No problem at all!",
      "Happy to help! Anything else?"
    ]);
  }

  // Default
  return rand([
    `That's interesting! Tell me more about '${input}'`,
    "I see! Could you tell me more?",
    "That's a great point! What else would you like to discuss?",
    "Interesting! I'm still learning. Can you tell me more?",
    "Got it! What would you like to know?",
  ]);
}

// UI wiring
document.addEventListener('DOMContentLoaded', ()=>{
  const messages = document.getElementById('messages');
  const textInput = document.getElementById('textInput');
  const nameInput = document.getElementById('nameInput');
  const controls = document.getElementById('controls');

  function appendMessage(text, who){
    const el = document.createElement('div');
    el.className = 'msg ' + (who==='user' ? 'user' : 'bot');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    el.appendChild(bubble);
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  controls.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = nameInput.value.trim() || 'Friend';
    const text = textInput.value.trim();
    if(!text) return;
    appendMessage(`${name}: ${text}`, 'user');
    textInput.value='';
    setTimeout(()=>{
      const reply = getBotResponse(text);
      appendMessage(`Bot: ${reply}`, 'bot');
    }, 400);
  });
});
