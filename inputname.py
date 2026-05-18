import random

def get_bot_response(user_input):
    """Generate responses based on user input."""
    user_input = user_input.lower()
    
    # Greetings
    if any(word in user_input for word in ['hello', 'hi', 'hey', 'greetings']):
        responses = [
            "Hello there! How can I help you today?",
            "Hi! Nice to see you! What would you like to talk about?",
            "Hey! I'm here to help. What's on your mind?"
        ]
        return random.choice(responses)
    
    # How are you responses
    elif any(phrase in user_input for phrase in ["how are you", "how do you do", "how's it going"]):
        responses = [
            "I'm doing great, thank you for asking! 😊",
            "I'm doing well! Ready to help you with anything you need.",
            "Fantastic! Always happy to chat with you!"
        ]
        return random.choice(responses)
    
    # About the bot
    elif any(word in user_input for word in ['who are you', 'what are you', 'your name', 'about you']):
        return "I'm your AI assistant! I'm here to chat with you, answer questions, and help you with various tasks. Think of me as a friendly companion who's always ready to help!"
    
    # Goodbye
    elif any(word in user_input for word in ['bye', 'goodbye', 'see you', 'later']):
        responses = [
            "Goodbye! It was great chatting with you!",
            "Take care! Come back soon! 👋",
            "Bye for now! Hope to talk again soon!"
        ]
        return random.choice(responses)
    
    # Help request
    elif any(word in user_input for word in ['help', 'assist', 'support']):
        return "I'd be happy to help! You can ask me about:\n• General questions\n• Basic information\n• Have a friendly chat\n• And much more! Just type your question."
    
    # Thank you
    elif any(word in user_input for word in ['thank', 'thanks', 'appreciate']):
        responses = [
            "You're welcome! 😊",
            "No problem at all!",
            "Happy to help! Anything else?"
            "My pleasure! Let me know if you need anything else!"
            "Anytime! I'm here whenever you need me!"
            "Glad I could assist! Feel free to ask me anything else!"
            "I Love You! ❤️"
        ]
        return random.choice(responses)
    
    # Default responses for other inputs
    else:
        responses = [
            f"That's interesting! Tell me more about '{user_input}'",
            "I see! Could you tell me more?",
            "That's a great point! What else would you like to discuss?",
            "Interesting! I'm still learning. Can you tell me more?",
            "Got it! What would you like to know?",
            "I appreciate you sharing that! What's on your mind?"
            "Bro, I'm still learning. Can you tell me more about '{user_input}'?"
            "{user_input} you too?"
            "Bro, I'm still learning. Can you tell me more about '{user_input}'? I want to understand better!"
            
        ]
        return random.choice(responses)


def chat_bot():
    """Main chatbot function."""
    print("=" * 50)
    print("🤖 WELCOME TO AI CHATBOT 🤖")
    print("=" * 50)
    print()
    
    # Get user's name
    name = input("What is your name? ").strip()
    if not name:
        name = "Friend"
    
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
