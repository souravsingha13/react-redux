import { INCREMENT, RESET, DECREMENT } from "../constants/constant"

export const incrementCount = () =>{
    return({
        type : INCREMENT
    })
}

export const decrementCount = () =>{
    return({
        type : DECREMENT
    })
}

export const resetCount = () =>{
    return({
        type : RESET
    })
}