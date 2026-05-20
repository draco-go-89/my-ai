import random


def get_bot_response(user_input: str) -> str:
    """Generate responses based on user input."""
    user_input = (user_input or "").lower().strip()

    # Greetings / slang
    if any(word in user_input for word in [
        'hello', 'hi', 'hey', 'greetings', 'yo', 'sup', 'heyyo', 'hiya', 'howdy',
        'what up', 'whatup', 'dude', 'mate'
    ]):
        responses = [
            "Hello. How can I help?",
            "Hi. What would you like to do today?",
            "Good to see you. What is your question?",
            "Hello. Please tell me what you need.",
            "Hi. How can I assist you?",
            "Welcome. What would you like to discuss?",
            "Hello. What is on your mind?",
            "Hi. Please share your question.",
            "Good day. How can I help?",
            "Hello. What do you need help with?"
        ]
        return random.choice(responses)

    # How are you
    elif any(phrase in user_input for phrase in [
        "how are you", "how do you do", "how's it going", "how is it going",
        "u good", "you good", "you alright", "how you doing"
    ]):
        responses = [
            "I’m doing well. How can I help?",
            "I’m doing fine. What would you like to ask?",
            "I’m okay. Please tell me your question.",
            "I’m ready to help. What do you need?",
            "I’m doing good. How may I assist you?",
            "I’m fine. What are we working on?"
        ]
        return random.choice(responses)




    # What can you do / help
    elif any(phrase in user_input for phrase in [
        'what can you do', 'what you do', 'what do you do', 'help me', 'how to',
        'commands', 'how do i', 'what can i ask'
    ]):
        return random.choice([
            "I can chat, answer simple questions, and help you brainstorm.",
            "I’m your assistant. Ask me anything.",
            "Tell me what you need and I’ll try to help.",
            "I can do quick answers and simple suggestions. What do you want?",
            "I’m here to help. What’s the mission?"
        ])

    # About the bot
    elif any(word in user_input for word in [
        'who are you', 'what are you', 'your name', 'about you', 'who r u', 'bot'
    ]):
        return random.choice([
            "I’m your AI assistant—here to chat and help.",
            "I’m the friendly chatbot living in your browser. No big drama, just vibes.",
            "I’m here to answer questions and keep the convo moving.",

            "I’m a simple demo bot. You’ll get responses.",
            "I’m like a helpful friend."
        ])

    # Thanks / appreciation
    elif any(word in user_input for word in [
        'thank', 'thanks', 'thx', 'appreciate', 'ty', 'tysm', 'grateful', 'much'
    ]):
        responses = [
            "You’re welcome.",
            "No problem at all!",
            "Happy to help. What’s next?",
            "Anytime.",
            "My pleasure. Let’s keep going.",
            "Thanks for saying that.",
            "Glad I could help.",
            "Thank you. You’re welcome."
        ]
        return random.choice(responses)

    # Goodbye
    elif any(word in user_input for word in [
        'bye', 'goodbye', 'see you', 'later', 'cya', 'ttyl', 'exit', 'quit'
    ]):
        responses = [
            "Bye. It was nice chatting with you.",
            "Take care. Come back soon.",
            "See you later.",
            "Alright. Later.",
            "Peace out. Take care."
        ]
        return random.choice(responses)

    # Help request
    elif any(word in user_input for word in [
        'help', 'assist', 'support', 'can you help', 'help me', 'i need help', 'please help'
    ]):
        return random.choice([
            "Sure. Ask me anything—questions, ideas, or what you need.",
            "I can help with simple answers and friendly chat. What do you need?",
            "Tell me your question and I will do my best.",
            "I’m ready. What is the problem?"
        ])



    # Small talk (easy/common words)
    elif any(word in user_input for word in ['weather', 'rain', 'sun', 'hot', 'cold']):
        return random.choice([
            "Weather check: is it raining where you are?",
            "Weather can be unpredictable.",
            "Sun or rain, I’m here to chat."
        ])
    elif any(word in user_input for word in ['food', 'hungry', 'eat', 'snack', 'pizza', 'burger']):
        return random.choice([
            "What are you craving?",
            "If you’re hungry, tell me what you want to eat.",
            "What is your go-to snack?"
        ])
    elif any(word in user_input for word in ['sleep', 'tired', 'nap', 'wake up']):
        return random.choice([
            "If you’re tired, take a short break.",
            "Rest if you can.",
            "Come back when you’re ready."
        ])
    elif any(word in user_input for word in ['music', 'song', 'spotify', 'listen']):
        return random.choice([
            "Music time. What are you listening to?",
            "What’s the last song you listened to?",
            "Do you prefer calm or upbeat music?"
        ])

    # Default (more varied short easy responses)
    else:
        starters = [
            "Got it! ", "Nice! ", "Okay! ", "Cool! ", "Bet! ",
            "Oof—interesting. ", "Wait—tell me more. ", "Hmm. ",
            "Alright then. ", "Real quick: ", "So basically: "
        ]
        endings = [
            "What do you mean?",
            "What happened next?",
            "Do you want advice or confirmation?",
            "Give me a bit more detail.",
            "Keep going.",
            "Say more.",
            "Any examples?",
            "What’s your goal?",
            "How do you feel about it?",
            "Do you want a simple response?",
            "Do you want a short answer or details?"
        ]
        return f"{random.choice(starters)}{random.choice(endings)}"


def chat_bot():
    """Main chatbot function."""
    print("=" * 50)
    print("WELCOME")
    print("=" * 50)
    print()

    # Get user's name
    name = input("What is your name? ").strip()
    if not name:
        name = "Friend"  # Default name if user doesn't provide one

    # Personalized greeting
    print()
    print(f"Hello, {name}! I am your AI assistant.")
    print("Nice to meet you! I'm here to chat and answer your questions.")
    print("Type 'bye' or 'goodbye' when you want to end the conversation.")
    print("-" * 50)
    print()

    # Chat loop
    while True:
        try:
            user_input = input(f"{name}: ").strip()

            if not user_input:
                print("Bot: Please say something.")
                continue

            # Check for exit
            if any(word in user_input.lower() for word in ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit']):
                print()
                print("Bot: Goodbye! Take care.")
                break

            # Get and display bot response
            response = get_bot_response(user_input)
            print(f"Bot: {response}")
            print()

        except KeyboardInterrupt:
            print()
            print("Bot: Goodbye! Chat terminated. Take care.")
            break


# Run the chatbot
if __name__ == "__main__":
    chat_bot()

