import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import  Button  from './Button';
import { ReactButtonProps } from './Button';


export default {
    title: 'Button',
    component: Button,
    argTypes: {},
} as Meta

const Template: Story<ReactButtonProps> = (args) => <Button {...args} />

export const ButtonStorie = Template.bind({});

ButtonStorie.args = {
  title: "SET",
  onClick: action('button pressed'),
                        disabled:true,
}