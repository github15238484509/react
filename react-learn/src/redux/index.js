
import { createStore } from "redux"
function reducer(state, action) {
    if (action.type === "increase") {
        return state + 1
    } else if (action.type === "decrease") {
        return state - 1
    }
    return state
}
let store = createStore(reducer, 10)
console.log(store.getState());
store.subscribe(() => {
    console.log('store改变了');
})
store.dispatch({
    type: 'increase'
})
console.log(store.getState());
console.log(store);