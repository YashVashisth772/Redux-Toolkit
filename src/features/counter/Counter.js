import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement ,incrementByCount } from "./counterSlice";

function Counter(){
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    console.log('count',count)
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <span>Count: {count}</span>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <br/>
            <button onClick={()=>{dispatch(incrementByCount(10))}}>increment by 10</button>
        </div>
    )
}
export default Counter;