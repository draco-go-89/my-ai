function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getBotResponse(input) {
  // Legacy fallback (in case API is unavailable)

  const user_input = (input || "").toLowerCase().trim();

  // Helpers to keep responses more consistent and formal
  const formalStarters = [
    "Thank you for your message.",
    "I appreciate your question.",
    "Understood.",
    "Certainly.",
    "I will do my best to assist you.",
    "I understand what you mean.",
    "Thank you—please allow me to respond in a clear manner.",
    "Absolutely.",
    "I have noted your request.",
    "Let us proceed step by step."
  ];

  const formalClosers = [
    "If you provide one or two additional details, I can tailor the response more precisely.",
    "Would you like a short answer or a more detailed explanation?",
    "Please share the objective you are aiming for.",
    "Tell me what constraints or preferences you have, if any.",
    "If you confirm the context, I can respond more accurately.",
    "I am ready to help further based on your next message.",
    "Once you clarify, I will help you choose the best next step.",
    "I can adapt the guidance to your situation if you describe it briefly.",
    "Let me know what outcome you prefer."
  ];

  function pick(list) {
    return rand(list);
  }

  // Large word/phrase banks (to broaden matching + variety)
  const greetings = [
    "hello", "hi", "hey", "greetings", "howdy", "good morning", "good afternoon", "good evening",
    "hiya", "welcome", "nice to meet you", "how are you", "how do you do"
  ];

  const howAreYouPhrases = [
    "how are you", "how do you do", "how's it going", "how is it going",
    "how you doing", "you good", "u good", "you alright", "are you okay"
  ];

  const helpAsks = [
    "help", "assist", "support", "i need help", "please help", "can you help", "i require help",
    "could you assist", "need assistance", "im stuck", "i am stuck"
  ];

  const capabilitiesAsks = [
    "what can you do", "what you do", "what can i ask", "what can i do", "how to",
    "commands", "how does this work", "what is your purpose", "what are you capable of"
  ];

  const aboutBotAsks = [
    "who are you", "what are you", "your name", "about you", "bot", "who r u", "what is this"
  ];

  const thanksAsks = [
    "thank", "thanks", "thx", "appreciate", "ty", "tysm", "grateful", "much"
  ];

  const goodbyeAsks = [
    "bye", "goodbye", "see you", "later", "cya", "ttyl", "exit", "quit", "farewell"
  ];

  const weatherTopics = ["weather", "rain", "sun", "sunny", "hot", "cold", "temperature", "storm"];
  const foodTopics = ["food", "hungry", "eat", "snack", "pizza", "burger", "lunch", "dinner", "breakfast"];
  const musicTopics = ["music", "song", "listen", "spotify", "playlist", "audio", "song recommendation"];
  const sleepTopics = ["sleep", "tired", "nap", "wake up", "fatigue", "insomnia"];

  // Greetings
  if (greetings.some(w => user_input.includes(w))) {
    return pick([
      "Hello. I am here to assist you. How can I help you today?",
      "Hi there. What would you like to discuss?",
      "Greetings. Please tell me what you need, and I will respond as clearly as possible.",
      "Good day. How may I be of service?",
      "Welcome. Thank you for your message. What would you like to work on?"
    ]);
  }

  // How are you
  if (howAreYouPhrases.some(p => user_input.includes(p))) {
    return pick([
      "I am functioning well and ready to assist you. How can I help?",
      "I am doing fine. Thank you for asking—what would you like to discuss today?",
      "I am in good working order. Please share your question or goal.",
      "I am doing well. If you tell me what you need, I will provide helpful guidance.",
      "I am okay and prepared to respond. What is on your mind?"
    ]);
  }

  // What can you do / capabilities
  if (capabilitiesAsks.some(p => user_input.includes(p))) {
    return pick([
      "I can help with clarifying questions, drafting explanations, brainstorming ideas, and providing general guidance in a formal style.",
      "I can answer common questions, suggest next steps, and help you structure your thoughts into clear communication.",
      "I can provide both short confirmations and more detailed explanations, depending on what you prefer.",
      "Tell me your objective, and I will propose an appropriate approach.",
      "I can help you improve understanding through step-by-step reasoning and example-driven responses."
    ]);
  }

  // About the bot
  if (aboutBotAsks.some(w => user_input.includes(w))) {
    return pick([
      "I am a simple AI-style chatbot created for this web demo. I respond using a set of prewritten templates and heuristics.",
      "I am an assistant designed to provide conversational responses directly in your browser.",
      "I am a lightweight chatbot intended for demonstration and basic question-answering.",
      "My purpose is to interact with you and produce helpful, formal answers based on recognized topics.",
      "I am here to assist with chat, suggestions, and commonly asked questions."
    ]);
  }

  // Thanks
  if (thanksAsks.some(w => user_input.includes(w))) {
    return pick([
      "You are welcome. I am glad I could be helpful.",
      "No problem at all. Please continue—how can I assist you further?",
      "Thank you. If you would like, share additional context and I will respond more precisely.",
      "My pleasure. I am ready to help with the next step.",
      "You are very welcome. Tell me what you would like to do next."
    ]);
  }

  // Goodbye
  if (goodbyeAsks.some(w => user_input.includes(w))) {
    return pick([
      "Goodbye. Thank you for your time, and please take care.",
      "Farewell. I hope the guidance I provided was useful.",
      "See you later. If you return with a new question, I will be here to help.",
      "Take care. Wishing you success in your next steps.",
      "Until next time—goodbye and best regards."
    ]);
  }

  // Help request
  if (helpAsks.some(w => user_input.includes(w))) {
    return pick([
      "I can help. Please describe the problem in one or two sentences, including what you have tried so far.",
      "Understood. What outcome are you hoping to achieve, and what part is currently difficult?",
      "I will assist you. Kindly provide the relevant details and any constraints (time, tools, budget, or requirements).",
      "Please tell me exactly what you need help with. If you share context, I can propose a more accurate solution.",
      "Tell me your question, and I will respond with clear, structured guidance."
    ]);
  }

  // Small talk topics (neutral but formal)
  if (weatherTopics.some(w => user_input.includes(w))) {
    return pick([
      "Regarding the weather: it can change quickly. If you tell me your location or conditions, I can suggest a sensible plan for the day.",
      "Weather patterns are variable. Are you asking for general advice, or do you want guidance for what to wear right now?",
      "If you share whether it is raining, windy, or unusually warm/cold, I can offer a practical recommendation."
    ]);
  }

  if (foodTopics.some(w => user_input.includes(w))) {
    return pick([
      "For food-related questions: what preferences do you have—vegetarian options, dietary restrictions, or a specific cuisine?",
      "If you tell me what you are craving and how much time you have, I can suggest a suitable meal or snack.",
      "To recommend appropriately, please mention whether you want something quick, healthy, or more indulgent."
    ]);
  }

  if (musicTopics.some(w => user_input.includes(w))) {
    return pick([
      "Music recommendations depend on your preferred style. Do you want something calm, energetic, or suitable for focus?",
      "What is the last song you enjoyed? With that, I can suggest similar options.",
      "Please describe the mood you want—relaxed, motivated, nostalgic, or upbeat—and I will propose ideas accordingly."
    ]);
  }

  if (sleepTopics.some(w => user_input.includes(w))) {
    return pick([
      "If you are feeling tired, a short rest may help restore focus. What time is it where you are?",
      "For sleep-related concerns, consistency matters. Are you asking for general wellness advice or for immediate calming steps?",
      "If you describe your schedule and how long you have available, I can suggest a practical plan."
    ]);
  }

  // Knowledge: common questions (expanded)
  if (["what is computer", "computer what is", "what is a computer", "definition of computer"].some(p => user_input.includes(p))) {
    return pick([
      "A computer is an electronic device that accepts input, processes data according to instructions, and produces output. In modern usage, it typically includes hardware components and software programs.",
      "A computer can store, retrieve, and transform information. It generally performs arithmetic and logical operations to execute tasks as directed by software.",
      "In simple terms, a computer is a programmable tool designed to process information efficiently and reliably."
    ]);
  }

  if (["what is github", "github what is", "github", "what is github.com"].some(p => user_input.includes(p))) {
    return pick([
      "GitHub is a platform for hosting and collaborating on software projects using Git. It allows teams to manage source code, review changes, and coordinate development work.",
      "GitHub helps developers store repositories, track versions, and collaborate through pull requests, issues, and code review workflows.",
      "In practice, GitHub acts as a centralized hub where developers can share code, contribute improvements, and maintain project history."
    ]);
  }

  if (["who is", "who's", "who is the"].some(p => user_input.includes(p))) {
    if (user_input.includes("greatest footballer") || user_input.includes("best footballer") || user_input.includes("best soccer")) {
      return "The question of the greatest footballer is subjective and often depends on criteria such as goals, assists, trophies, creativity, and influence. Commonly cited names include Lionel Messi and Cristiano Ronaldo, though many other players are also considered among the top candidates.";
    }
    if (user_input.includes("greatest musician") || user_input.includes("best musician") || user_input.includes("best singer")) {
      return "The greatest musician is subjective as well, because musical impact can be measured in different ways—innovation, popularity, cultural influence, and technical skill. Many people mention artists such as Michael Jackson, Prince, or The Beatles, depending on genre and personal preference.";
    }
    return pick([
      "I can answer, but the result depends on which person or field you mean. Could you specify the name, category, or context?",
      "If you clarify the subject (e.g., sports, science, history, entertainment), I will respond with a more accurate explanation." 
    ]);
  }

  if (["where is", "what is capital", "capital of", "what is the capital"].some(p => user_input.includes(p))) {
    return pick([
      "Please specify the country or region you mean, and I will respond with the correct capital.",
      "To answer precisely, tell me which country or area you are asking about.",
      "If you provide the specific place, I can provide the capital and, if useful, a brief context about it." 
    ]);
  }

  // Extended “formal conversation” fallbacks: more templates and longer responses
  const userIntents = [
    { k: ["explain", "explanation", "tell me about"], r: [
      "I can explain that in a structured manner. What level of detail do you want—simple overview or a comprehensive explanation?",
      "Please confirm the topic and your current understanding. Then I will provide a clear explanation with key points.",
      "Tell me the specific concept you want explained, and I will respond with definitions and relevant examples." ] },
    { k: ["summarize", "summary", "short"], r: [
      "I can provide a concise summary. What text, topic, or scenario should I summarize?",
      "Please share the material you want summarized, and I will condense it into clear, formal points." ] },
    { k: ["draft", "write", "compose"], r: [
      "I can draft a formal message or document. Please provide the purpose, audience, and tone you want (e.g., professional, academic, courteous).",
      "Tell me what you need to write and the context. I will create a structured draft that you can refine." ] },
    { k: ["ideas", "brainstorm", "suggest"], r: [
      "I can brainstorm ideas. What is the goal, and are there any constraints such as budget, timeline, or required features?",
      "Please tell me what you are planning, and I will propose multiple formal options for you to consider." ] },
    { k: ["plan", "steps", "roadmap"], r: [
      "A step-by-step plan is feasible. What is your deadline, and what resources do you have available?",
      "Share your objective and constraints, and I will produce an actionable roadmap with clear milestones." ] },
    { k: ["question", "what"], r: [
      "Please restate your question clearly. If you add context, I can provide a more accurate and useful response.",
      "I am ready to answer. Could you specify the exact question you want addressed?" ] }
  ];

  for (const intent of userIntents) {
    if (intent.k.some(k => user_input.includes(k))) {
      return pick(intent.r);
    }
  }

  // Default fallback (more variety + formal)
  const fallback = [
    "I have understood your request. To respond effectively, could you clarify the specific outcome you want?",
    "Thank you. I can assist, but I need a bit more detail to ensure the response is relevant and accurate.",
    "I understand the general direction, yet the details are not fully clear. Please provide additional context.",
    "I am prepared to help. Please share the main topic and any constraints, and I will respond in a structured way.",
    "Understood. Would you like guidance in the form of a checklist, an explanation, or a drafted message?"
  ];

  return pick(formalStarters) + " " + pick(fallback) + " " + pick(formalClosers);
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

  const sendBtn = document.getElementById('sendBtn');

  function setLoading(isLoading) {
    sendBtn.disabled = isLoading;
    sendBtn.dataset.loading = String(isLoading);
    if (isLoading) {
      sendBtn.textContent = 'Sending…';
    } else {
      sendBtn.textContent = 'Send';
    }
  }

  controls.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim() || 'Friend';
    const text = textInput.value.trim();
    if (!text) return;

    appendMessage(`${name}: ${text}`, 'user');
    textInput.value = '';

    setLoading(true);

    setTimeout(async () => {
      try {
        // Call backend LLM API (Gemini) securely. API key must stay on server.
        const resp = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });

        const data = await resp.json();
        const reply = data?.reply || data?.error || 'No response was generated.';
        appendMessage(`Bot: ${reply}`, 'bot');
      } catch (e) {
        appendMessage(`Bot: Server error. Please try again.`, 'bot');
      } finally {
        setLoading(false);
      }
    }, 350);

  });

});



