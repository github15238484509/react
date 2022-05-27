
import { createStore, bindActionCreators } from "redux"
import * as actionTypes from "./action/action-types"
import * as actionDispatch from "./action/action-dispatch"
function reducer(state, action) {
    if (action.type === actionTypes.INCREASE) {
        return state + 1
    } else if (action.type === actionTypes.DECREASE) {
        return state - 1
    }
    return state
}
let store = createStore(reducer, 10)
store.subscribe(() => {
    console.log('store改变了');
})
console.log(store.getState());

let dispatch = bindActionCreators(actionDispatch, store.dispatch)
console.log(dispatch, actionDispatch);
dispatch.getIncrease()
// store.dispatch({
//     type: actionTypes.INCREASE
// })
console.log(store.getState());
console.log(store);