import React from 'react';
import { Provider } from 'react-redux';
import { counterReducer, InitialStateType } from '../../store/counterReducer';
import {createStore, combineReducers} from 'redux';
import { RootStateType, store } from '../../store/store';

// const rootReducer = combineReducers({
//     counter: counterReducer
//  });

//  const initialState = {  
//     value: 0,
//     error: false,
//     counterIsActive: false,
//     counterMaxValue: 3,
//     counterStartValue: 0,
// }
 
//  export const storyBookStore = createStore(rootReducer, initialState as InitialStateType);

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return (
    <Provider 
    store={store}>{storyFn()}
</Provider>
    )} 
