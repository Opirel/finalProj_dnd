import React, { useState } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ChatInput;
