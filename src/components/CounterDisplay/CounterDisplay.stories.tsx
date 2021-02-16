import React from 'react';
import {action} from '@storybook/addon-actions';
import { ReduxStoreProviderDecorator } from '../../stories/decorators/ReduxStoreProviderDecorator';
import { Meta, Story } from '@storybook/react/types-6-0';
import CounterDisplay, {PropsType} from './CounterDisplay';

export default {
    title: 'Display',
    component: CounterDisplay,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta

const Template: Story<PropsType> = (args) => <CounterDisplay {...args} />

export const Display = Template.bind({});

Display.args = {
    text: 'enter values & press "set',
    incButtonHandler: action('current value +1'),
    recButtonHandler: action('current value = 0'),
};

export const DisplayError = Template.bind({});

DisplayError.args = {
    text: 'Invalid values',
    incButtonHandler: () => action('current value +1'),
    recButtonHandler: () => action('current value = 0'),
}