import React, { useState } from 'react'
// import React, { useState, useReducer } from 'react'


/**
 * 这是一个reducer通用函数
 * @param {Function} reducer  处理函数
 * @param {any} initData 初始值
 * @param {Function} initFun 参数初始值的函数，可以不写
 * @returns {Array} [state,dispath]
 */

function useReducer(reducer, initData, initFun) {
    let [state, setState] = useState(initFun ? initFun(initData) : initData)
    /**
     * 
     * @param {Object} action 213
     */
    function dispatch(action) {
        let newState = reducer(state, action)
        console.log(`状态 ${state} --> ${newState}`);
        setState(newState)
    }
    return [state, dispatch]
}

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return state - action.payload
        case "decrease":
            return state + action.payload
        default:
            return state
    }
}


export default function App() {
    const [state, dispatch] = useReducer(reducer, 10, (params) => { return params * 2 })
    return (
        <>
            <button onClick={() => {
                dispatch({
                    type: "increase",
                    payload: 10
                })
            }}>-</button>
            <span>{state}</span>
            <button onClick={() => {
                dispatch({
                    type: "decrease",
                    payload: state + 1
                })
            }}>+</button>
        </>
    )
}