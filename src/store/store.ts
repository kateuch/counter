import {createStore, combineReducers} from 'redux';
import { loadState, saveState } from '../utils/localStorage';
import { counterReducer } from './counterReducer';


const rootReducer = combineReducers({
    counter: counterReducer
 });

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
      counter: store.getState().counter
    });
});

export type RootStateType = ReturnType<typeof rootReducer>;

 // @ts-ignore
window.store = store