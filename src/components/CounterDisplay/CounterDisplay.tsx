
import React from 'react';
import Button from '../common/Button';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import style from './../../style/counter.module.css';


export default function CounterDisplay(props: PropsType) {

  const { incButtonHandler, recButtonHandler, text } = props
  const { counterMaxValue, value, counterIsActive, error } = useSelector((state: RootStateType) => state.counter)

  return (
    <>
      <div className={style.counterWrapper} >
        <div className={style.counterDisplay}>
          {counterIsActive ? value : text}
        </div>
        <div className={style.counterBottom}>

          <Button title={'INC'}
            onClick={incButtonHandler}
            disabled={(value === counterMaxValue || error || counterIsActive === false ? true : false)} />

          <Button title={'RESET'}
            onClick={recButtonHandler}
            disabled={(value != counterMaxValue || error ? true : false)} />
        </div>
      </div>
    </>
  )
}


//types
type PropsType = {
  text: string,
  incButtonHandler: () => void,
  recButtonHandler: () => void,
}
