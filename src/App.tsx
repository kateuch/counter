import React, { useEffect, useState } from 'react';
import style from './style/App.module.css';

import CounterSetting from './components/CounterSetting/CounterSetting';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import { actionCreators } from './store/counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './store/store';

function App() {

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const { error } = useSelector((state: RootStateType) => state.counter)

  useEffect(() => {
    (error) ? setText('Invalid values') : setText('enter values & press "set"')
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
     <CounterSetting/>
     <CounterDisplay text={text}
                incButtonHandler={incButtonHandler}
                recButtonHandler={recButtonHandler} />
     </div>
  );
}

export default App;
