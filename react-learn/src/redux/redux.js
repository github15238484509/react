
export function createStore(reducer, defaultState) {
    let state = defaultState
    let subscribes = []
    function dispatch(action) {
        state = reducer(state, action)
        for (let i = 0; i < subscribes.length; i++) {
            subscribes[i]()
        }
    }
    function subscribe(fn) {
        subscribes.push(fn)
        return () => {
            subscribes = subscribes.filter(it => it !== fn)
        }
    }
    function getState() {
        return state
    }
    dispatch({
        type: Math.random()
    })
    return {
        dispatch,
        getState,
        subscribe
    }
}

export function bindActionCreators(action, dispatch) {
    let result = {}
    for (const key in action) {
        if (Object.hasOwnProperty.call(action, key)) {
            let fn = action[key]
            result[key] = (...arg) => {
                dispatch(fn(...arg))
            }
        }
    }
    return result
}


export function myMiddleware(...func) {
    return (createStore) => {
        return (reducer) => {
            let store = createStore(reducer)
            let dispatch = () => {
                throw new TypeError("去死")
            }
            func = func.map(it => it(store))
            dispatch = compose(...func)(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}

function compose(...arg) {
    return (va) => {
        let value = va
        for (let i = arg.length - 1; i >= 0; i--) {
            value = arg[i](value)
        }
        return value
    }
}
