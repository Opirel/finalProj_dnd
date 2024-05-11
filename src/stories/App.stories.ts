import React from 'react';
import { Story, Meta } from '@storybook/react';
import ChatApp from './ChatApp';

export default {
  title: 'Components/ChatApp',
  component: ChatApp,
} as Meta;

const Template: Story = (args) => <ChatApp {...args} />;

export const Default = Template.bind({});
