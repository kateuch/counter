import React from 'react';
import style from './style/App.module.css';

import CounterSetting from './components/CounterSetting/CounterSetting';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';


function App() {

  
  return (
    <div className={style.app}>
     <CounterSetting/>
     </div>
  );
}

export default App;
