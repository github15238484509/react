
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