import random


def get_bot_response(user_input: str) -> str:
    """Generate responses based on user input."""
    user_input = (user_input or "").lower().strip()

    # Greetings / slang
    if any(word in user_input for word in [
        'hello', 'hi', 'hey', 'greetings', 'yo', 'sup', 'heyyo', 'hiya', 'howdy',
        'what up', 'whatup', 'fam', 'bruh', 'dude', 'mate'
    ]):
        responses = [
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
        ]
        return random.choice(responses)

    # How are you
    elif any(phrase in user_input for phrase in [
        "how are you", "how do you do", "how's it going", "how is it going",
        "u good", "you good", "you alright", "how you doing"
    ]):
        responses = [
            "I’m doing great—thanks for asking! 😊",
            "I’m chillin’ 😌 Ready to help you.",
            "All good! You bringing good vibes or chaos today? 😄",
            "Fantastic! Quick question: what are we doing today?",
            "Doing well! Let’s make it a W day. 💪",
            "Ngl I’m vibing. What about you? 👀"
        ]
        return random.choice(responses)

    # Joke / funny
    elif any(word in user_input for word in [
        'joke', 'funny', 'lol', 'lmao', 'roast', 'meme', 'cringe', 'lolf',
        'yeet', 'hehe', 'fun', 'laugh'
    ]):
        jokes = [
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
        ]
        return random.choice(jokes)

    # What can you do / help
    elif any(phrase in user_input for phrase in [
        'what can you do', 'what you do', 'what do you do', 'help me', 'how to',
        'commands', 'how do i', 'what can i ask'
    ]):
        return random.choice([
            "I can chat, answer simple questions, and help you brainstorm. 😄",
            "I’m basically your friendly sidekick—ask me anything!",
            "Tell me what you need and I’ll try to help, fam. 🤝",
            "I can do quick answers, jokes, and simple suggestions. What do you want?",
            "I’m a vibe + info machine. What’s the mission? 🚀"
        ])

    # About the bot
    elif any(word in user_input for word in [
        'who are you', 'what are you', 'your name', 'about you', 'who r u', 'bot'
    ]):
        return random.choice([
            "I’m your AI assistant—here to chat and help. 😄",
            "I’m the friendly chatbot living in your browser. No big drama, just vibes.",
            "I’m here to answer questions, tell jokes, and keep the convo moving. 🚀",
            "I’m a simple demo bot—smart-ish, funny-ish. You’ll survive. 😄",
            "I’m like a helpful friend… but with Wi‑Fi. ✨"
        ])

    # Thanks / appreciation
    elif any(word in user_input for word in [
        'thank', 'thanks', 'thx', 'appreciate', 'ty', 'tysm', 'grateful', 'much'
    ]):
        responses = [
            "You’re welcome! 😊",
            "No problem at all!",
            "Happy to help! What’s next? 😄",
            "Anytime! I got you, fam 🤝",
            "My pleasure! Let’s keep going.",
            "W—thanks for saying that! ❤️",
            "Glad I could help. You’re awesome too! ✨",
            "Thank you back! You’re the best fr. 😄"
        ]
        return random.choice(responses)

    # Goodbye
    elif any(word in user_input for word in [
        'bye', 'goodbye', 'see you', 'later', 'cya', 'ttyl', 'exit', 'quit'
    ]):
        responses = [
            "Bye! It was nice chatting with you 👋",
            "Take care! Come back soon 😄",
            "See you later, fam! ✌️",
            "Alright alright—later! Keep it easy 😌",
            "Peace out! Don’t be a stranger. 🤝"
        ]
        return random.choice(responses)

    # Help request
    elif any(word in user_input for word in [
        'help', 'assist', 'support', 'can you help', 'help me', 'i need help', 'please help'
    ]):
        return random.choice([
            "Sure thing 😄 Ask me anything—questions, ideas, or just jokes.",
            "I can help with simple answers and friendly chat. What do you need?",
            "Tell me your question and I’ll do my best. 🤝",
            "I’m on it. Drop the problem, fam. 👀"
        ])

    # Slang triggers (friendly)
    elif any(word in user_input for word in [
        'bruh', 'fam', 'fr', 'ong', 'ngl', 'frfr', 'idk', 'w', 'l', 'yeet', 'rip', 'no cap', 'cap'
    ]):
        return random.choice([
            "Real talk 😄 Tell me more.",
            "Ngl, that’s kinda interesting 👀",
            "W response. What’s the next move?",
            "Frfr—okay okay, I’m listening 👂",
            "Yeet! Lemme help you with that 😂",
            "Bruh, say less. What do you want to ask? 😄",
            "No cap—this convo is actually going somewhere. 🚀"
        ])

    # Small talk (easy/common words)
    elif any(word in user_input for word in ['weather', 'rain', 'sun', 'hot', 'cold']):
        return random.choice([
            "Weather check: rain outside? cozy inside vibes ☔️",
            "Honestly… weather is always doing the most 😭",
            "Sun’s cute, but I’m still here for the chat 😄"
        ])
    elif any(word in user_input for word in ['food', 'hungry', 'eat', 'snack', 'pizza', 'burger']):
        return random.choice([
            "Food talk? Respect. What are you craving? 🍕",
            "If you’re hungry, I’m hungry for that info too 😂",
            "Snack check: what’s your go-to?"
        ])
    elif any(word in user_input for word in ['sleep', 'tired', 'nap', 'wake up']):
        return random.choice([
            "Sleep is valid. Do a quick nap, then come back 😌",
            "Tired? Same. But we ballin’—one message at a time 😂",
            "Go rest if you can. I’ll still be here when you wake. ✨"
        ])
    elif any(word in user_input for word in ['music', 'song', 'spotify', 'listen']):
        return random.choice([
            "Music time? Drop the vibe—chill or hype? 🎧",
            "I don’t pick songs… you do. But I judge your playlist lovingly 😄",
            "What’s the last song you couldn’t stop listening to?"
        ])

    # Default (more varied short easy responses)
    else:
        starters = [
            "Got it! ", "Nice! ", "Okay! ", "Cool! ", "Bet! ",
            "Oof—interesting. ", "Wait—tell me more. ", "Hmm. ",
            "Alright then. ", "Real quick: ", "So basically: "
        ]
        endings = [
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
        ]
        return f"{random.choice(starters)}{random.choice(endings)}"


def chat_bot():
    """Main chatbot function."""
    print("=" * 50)
    print("🤖 WELCOME BOSS 🤖")
    print("=" * 50)
    print()

    # Get user's name
    name = input("What is your name? ").strip()
    if not name:
        name = "Friend"  # Default name if user doesn't provide one

    # Personalized greeting
    print()
    print(f"Hello, {name}! I'm your AI assistant! 👋")
    print("Nice to meet you! I'm here to chat and answer your questions.")
    print("Type 'bye' or 'goodbye' when you want to end the conversation.")
    print("-" * 50)
    print()

    # Chat loop
    while True:
        try:
            user_input = input(f"{name}: ").strip()

            if not user_input:
                print("Bot: Please say something bro! 🤔")
                continue

            # Check for exit
            if any(word in user_input.lower() for word in ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit']):
                print()
                print("Bot: Goodbye! It was wonderful chatting with you! Take care bro! 👋")
                break

            # Get and display bot response
            response = get_bot_response(user_input)
            print(f"Bot: {response}")
            print()

        except KeyboardInterrupt:
            print()
            print("Bot: Goodbye! Chat terminated. Take care! 👋")
            break


# Run the chatbot
if __name__ == "__main__":
    chat_bot()

