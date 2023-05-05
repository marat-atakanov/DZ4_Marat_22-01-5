import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {doDivideAction, doMinusAction, doMultiplyAction, doPlusAction} from "../redux/actions";

export default function Calculator() {
    const [valueOne, setValueOne] = useState('')
    const [valueTwo, setValueTwo] = useState('')
    const [message, setMessage] = useState('')

    const {result} = useSelector(state => state.calculatorReducer)

    const changeValueOne = (e) => {
        setValueOne(e.target.value)
        setMessage('')
    }
    const changeValueTwo = (e) => {
        setValueTwo(e.target.value)
        setMessage('')
    }

    const dispatch = useDispatch()

    const doPlus = () => {
        if (valueOne !== '' && valueTwo !== '') {
            dispatch(doPlusAction(valueOne, valueTwo))
            setValueOne("")
            setValueTwo("")
        } else {
            setMessage('Заполните все поля')
        }
    }
    const doMinus = () => {
        if (valueOne !== '' && valueTwo !== '') {
            dispatch(doMinusAction(valueOne, valueTwo))
            setValueOne("")
            setValueTwo("")
        } else {
            setMessage('Заполните все поля')
        }
    }
    const doMultiply = () => {
        if (valueOne !== '' && valueTwo !== '') {
            dispatch(doMultiplyAction(valueOne, valueTwo))
            setValueOne("")
            setValueTwo("")
        } else {
            setMessage('Заполните все поля')
        }
    }
    const doDivide = () => {
        if (valueOne !== '' && valueTwo !== '') {
            dispatch(doDivideAction(valueOne, valueTwo))
            setValueOne("")
            setValueTwo("")
        } else {
            setMessage('Заполните все поля')
        }
    }
    return (
        <>
            <p style={{fontSize: "35px"}}>Calculator</p>
            <p style={{fontSize: "50px"}}>{result}</p>
            <div className="inputs">
                <input type="number" onChange={changeValueOne} value={valueOne}/>
                <input type="number" onChange={changeValueTwo} value={valueTwo}/>
            </div>
            <button onClick={doPlus}>+</button>
            <button onClick={doMinus}>-</button>
            <button onClick={doMultiply}>*</button>
            <button onClick={doDivide}>/</button>
            <p>{message}</p>
        </>
    )
}