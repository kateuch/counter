import React from 'react';
import {action} from '@storybook/addon-actions';
import CounterSetting from './CounterSetting';
import { ReduxStoreProviderDecorator } from '../../stories/decorators/ReduxStoreProviderDecorator';
import { Meta, Story } from '@storybook/react/types-6-0';


export default {
    title: 'CounterSetting',
    component: CounterSetting,
    argTypes: { },
    decorators: [ReduxStoreProviderDecorator]
} as Meta

export const CounterSettingExm: Story = (args) => {
    return (<CounterSetting {...args}/>)
}

