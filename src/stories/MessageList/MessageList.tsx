// MessageList.tsx
import React from 'react';

export type MessageListProps {
    messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
}

export default MessageList;
