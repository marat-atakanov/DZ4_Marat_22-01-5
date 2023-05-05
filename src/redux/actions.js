import {types} from "./types";

export function doPlusAction(valueOne, valueTwo) {
    return {
        type: types.PLUS,
        numOne: valueOne,
        numTwo: valueTwo
    }
}
export function doMinusAction(valueOne, valueTwo) {
    return {
        type: types.MINUS,
        numOne: valueOne,
        numTwo: valueTwo
    }
}
export function doMultiplyAction(valueOne, valueTwo) {
    return {
        type: types.MULTIPLY,
        numOne: valueOne,
        numTwo: valueTwo
    }
}
export function doDivideAction(valueOne, valueTwo) {
    return {
        type: types.DIVIDE,
        numOne: valueOne,
        numTwo: valueTwo
    }
}