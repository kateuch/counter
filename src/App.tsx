
import style from './style/App.module.css';
import { RootStateType } from './store/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, InitialStateType } from './store/counterReducer';
import CounterSetting from './components/CounterSetting/CounterSetting';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const {error} = useSelector<RootStateType, InitialStateType>(state => state.counter);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    (error) ? setText(' Invalid values !') : setText('Enter values & press "SET"')
  }, [error]);

  const incButtonHandler = () => {
    dispatch(actionCreators.IncrementAC())
    console.log('increment tab')
  };

  const recButtonHandler = () => {
    dispatch(actionCreators.ResetAC())
    console.log('reset tab')
  };


  return (
    <div className={style.app}>
    <CounterSetting />
      <CounterDisplay text={text}
        incButtonHandler={incButtonHandler}
        recButtonHandler={recButtonHandler} />
    </div>
  );
}

export default App;
