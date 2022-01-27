import * as React from 'react'
import { useCount, useDispatch } from './count-context'

function CountDisplay() {
    const { count } = useCount()
    return <div>{`The current count is ${count}`}</div>
}

function Counter() {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch({ type: 'increment' })}>
            Increment count
        </button>
    )
}

export { CountDisplay, Counter }