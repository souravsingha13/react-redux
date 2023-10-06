import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../services/actions/counterAction";



const Counter =()=>{
    const count = useSelector((store)=> store.count)
    console.log(count)
    const dispatch = useDispatch();
    const handleIncrement = () =>{
        dispatch(incrementCount())
    }
    const handleDecrement = () =>{
        dispatch(decrementCount())
    }
    const handleReset = () =>{
        dispatch(resetCount())
    }
    return(
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count} </h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter
