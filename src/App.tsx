import React, { useState } from 'react';
import MessageList from './stories/MessageList/MessageList';
import ChatInput from './stories/ChatInput/ChatInput';

const ChatApp: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (newMessage: string) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <h2>Chat Application</h2>
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatApp;
