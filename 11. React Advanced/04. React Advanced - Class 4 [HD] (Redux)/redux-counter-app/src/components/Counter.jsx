import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispath = useDispatch();

  return (
    <div>
        <button onClick={() => dispath(increment())}>
            Increment
        </button>

        <br/>
        <br/>

        <div>{count}</div>

        <br/>
        <br/>

        <button onClick={() => dispath(decrement())}>
            Decrement
        </button>
    </div>
  )
}
