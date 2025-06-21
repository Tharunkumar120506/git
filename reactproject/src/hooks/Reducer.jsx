import React, { useReducer } from 'react'

let initialValue = 0
let initialReact = { like: 0, dislike: 0 }

const counter = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialValue
        default:
            return state
    }
}

const likecounter = (state, action) => {
    switch (action.type) {
        case "LIKE":
            return { ...state, like: state.like + 1 }  
        case "DISLIKE":
            return { ...state, dislike: state.dislike + 1 } 
        case "RESET2":
            return { like: 0, dislike: 0 }  
        default:
            return state
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(counter, initialValue)
    const [likecount, dispatch1] = useReducer(likecounter, initialReact)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

            <h1>Like Count: {likecount.like}</h1>
            <h1>Dislike Count: {likecount.dislike}</h1>
            <button onClick={() => dispatch1({ type: "LIKE" })}>👍</button>
            <button onClick={() => dispatch1({ type: "DISLIKE" })}>👎</button>
            <button onClick={() => dispatch1({ type: "RESET2" })}>Reset</button>
        </div>
    )
}

export default Reducer
