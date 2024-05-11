import React from 'react';
import { Story, Meta } from '@storybook/react';
import ChatInput, { ChatInputProps } from './ChatInput';

export default {
  title: 'Components/ChatInput',
  component: ChatInput,
} as Meta;

const Template: Story<ChatInputProps> = (args) => <ChatInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSendMessage: (message) => console.log(message),
};
