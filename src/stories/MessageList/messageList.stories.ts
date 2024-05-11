// MessageList.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import MessageList, { MessageListProps } from './MessageList';

export default {
  title: 'Components/MessageList', 
  component: MessageList,
} as Meta<typeof MessageList>;

const Template: Story<MessageListProps> = (args : MessageListProps ) => <MessageList {...args} />;

export const Default = Template.bind({});
Default.args = {
    messages: ["Hello", "Hi there!"]
};
