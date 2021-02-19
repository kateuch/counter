import React from 'react';
import CounterSetting from './CounterSetting';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReduxStoreProviderDecorator } from '../../stories/decorators/ReduxStoreProviderDecorator';


export default {
    title: 'CounterSetting',
    component: CounterSetting,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta

export const CounterSettingExm: Story = (args) => {
    return (<CounterSetting {...args} />)
}

