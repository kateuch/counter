
import React, { useEffect, useState } from 'react';
import style from './../../style/counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import { actionCreators } from '../../store/counterReducer';
import Button from '../Button/Button';

type PropsType = {
  text: string
  incButtonHandler: () => void,
  recButtonHandler: () => void,
}

export default function CounterDisplay(props: PropsType) {

  const { incButtonHandler, recButtonHandler, text } = props
  const { counterMaxValue, counterStartValue, value, counterIsActive, error} = useSelector((state: RootStateType) => state.counter)

  return (
    <>
      <div className={style.counterWrapper} >
        <div className={style.counterDisplay}>
          {counterIsActive ? value : text}
        </div>
        <div className={style.counterBottom}>
        <Button  title ={'INC'}
                  onClick={incButtonHandler} 
                  disabled={(value===counterMaxValue || error || counterIsActive === false ? true : false)} />
            
            <Button  title={'RESET'}
                  onClick={recButtonHandler} disabled={(value!=counterMaxValue || error ? true : false)} />
            </div>
      </div>
    </>
  )
}

//types
export type PropsTypes = {
  incButton: () => void
  recButton: () => void
  disabled: boolean
}

// const DisplayStyle = {
//     width: "100px",
//     height: "50px",
//   margin: "30px auto",
//     color: "#61dafb",
//   boxSizing: "border-box"

// }