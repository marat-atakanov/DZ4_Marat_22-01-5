import {types} from "../types";

const initialState = {
    result: 0
}

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case types.PLUS:
            return {
                ...state,
                result: Number(action.numOne) + Number(action.numTwo)
            }
        case types.MINUS:
            return {
                ...state,
                result: Number(action.numOne) - Number(action.numTwo)
            }
        case types.MULTIPLY:
            return {
                ...state,
                result: Number(action.numOne) * Number(action.numTwo)
            }
        case types.DIVIDE:
            return {
                ...state,
                result: Number(action.numOne) / Number(action.numTwo)
            }
        default:
            return state
    }
}