
import Input from '../common/Input';
import Button from '../common/Button';
import { RootStateType } from '../../store/store';
import style from './../../style/counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/counterReducer';
import CounterDisplay from '../CounterDisplay/CounterDisplay';
import React, { ChangeEvent, useEffect, useState } from 'react';


function CounterSetting() {

    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { counterStartValue, counterMaxValue, value, error } = useSelector((state: RootStateType) => state.counter);

    useEffect(() => {
        (error) ? setText('Invalid values') : setText('enter values & press "set"')
    }, [error]);

    function onmaxValue(curValue: string) {
        dispatch(actionCreators.UpdMaxValueAC(Number(curValue)));
    };

    function onstartValue(curValue: string) {
        dispatch(actionCreators.UpdMinValueAC(Number(curValue)));
    };

    const onSetValues = () => {
        let value = counterStartValue;
        dispatch(actionCreators.SetValuesAC(value));
    };

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
                    <Input title='max value:'
                        value={counterMaxValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onmaxValue(e.currentTarget.value) }}
                        error={error} />
                    <Input title='max value:'
                        value={counterStartValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onstartValue(e.currentTarget.value) }}
                        error={error} />
                </div>
                <div className={style.counterBottom}>
                    <Button title={'SET'}
                        onClick={onSetValues}
                        disabled={error} />
                </div>
            </div>
            <CounterDisplay text={text}
                incButtonHandler={incButtonHandler}
                recButtonHandler={recButtonHandler} />
        </>
    )
};

export default CounterSetting; 
