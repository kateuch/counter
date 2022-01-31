import Input from '../common/Input';
import Button from '../common/Button';
import React, { ChangeEvent, } from 'react';
import { RootStateType } from '../../store/store';
import style from './../../style/counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/counterReducer';



function CounterSetting() {

    const dispatch = useDispatch();
    const { counterStartValue, counterMaxValue, error} = useSelector((state: RootStateType) => state.counter);

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

    return (
        <>
            <div className={style.window1st}>
                <div className={style.counterDisplay}>
                    <Input title='max value: '
                        value={counterMaxValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onmaxValue(e.currentTarget.value) }}
                        error={error} />
                    <Input title='min value: '
                        value={counterStartValue }
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onstartValue(e.currentTarget.value) }}
                        error={error} />
                </div>
                <div className={style.counterBottom}>
                    <Button title={'SET'}
                        onClick={onSetValues}
                        disabled={error} />
                </div>
            </div>

        </>
    )
};

export default CounterSetting; 
