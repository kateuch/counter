import React from 'react';

import Input, { PropsInputType } from './Input';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
} as Meta

const Template: Story<PropsInputType> = (args) => <Input {...args} />

export const InputStorie = Template.bind({});

InputStorie.args = {
  error: true,
  value: "1",
  onChange: action('input value changing')
}
