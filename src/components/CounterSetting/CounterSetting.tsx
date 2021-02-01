
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/counterReducer';
import { RootStateType } from '../../store/store';
import Button from '../Button/Button';
import CounterDisplay from '../CounterDisplay/CounterDisplay';
import style from './../../style/counter.module.css'



function CounterSetting() {

    const { counterStartValue, counterMaxValue, value, error } = useSelector((state: RootStateType) => state.counter);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    function onmaxValue(curValue: string) {
        dispatch(actionCreators.UpdMaxValueAC(Number(curValue)));
    };

    function onstartValue(curValue: string) {
        dispatch(actionCreators.UpdMinValueAC(Number(curValue)));
    };

    const onSetValues = () => {
        let value = counterStartValue;
        dispatch(actionCreators.SetValuesAC(value));
        // setMaxValue(counter.counterMaxValue);
        // setStartValue(counter.counterStartValue);
    }

   useEffect (() => {
       ( error) ? setText('Invalid values') : setText('enter values & press "set"')
   }, [error])

    // useEffect (() => {
    //   // (value !== counterStartValue) ? setCounter(`enter value and press "set"`) :  setCounter(value)
    //   console.log(`${value} + 'value rendered' `)
    // }, [])

    const incButtonHandler = () => {
        dispatch(actionCreators.IncrementAC())
        console.log('increment tab')
    };

    const recButtonHandler = () => {
        dispatch(actionCreators.ResetAC())
        console.log('reset tab')
    };
    return (
        <>
            <div className={style.counterWrapper}>
                <div className={style.counterDisplay}>
                    <label>
                        max value:
                <input className={error ? style.error_counterDisplay : ''} type='number' value={counterMaxValue}
                            onChange={(e) => { onmaxValue(e.currentTarget.value) }} />
                    </label>
                    <label>
                        min value:
                <input className={error ? style.error_counterDisplay : ''} type='number' value={counterStartValue} onChange={(e) => { onstartValue(e.currentTarget.value) }} />
                    </label>
                </div>
                <div className={style.counterBottom}>
                    
                    <Button  title ={'SET'}
                  onClick={onSetValues} 
                  disabled={error} />
                
                </div>
            </div>
            <CounterDisplay incButtonHandler={incButtonHandler} recButtonHandler={recButtonHandler} text={text} />
        </>
    )
};

export default CounterSetting; 
