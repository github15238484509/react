
// import { createStore, bindActionCreators } from "redux"
import { createStore, bindActionCreators, myMiddleware } from "./redux"
import reducer from "./reducer"
import action from "./action/index"
// let store = createStore(reducer)
function fun1(store) {
    return (dispatch) => {
        return (action) => {
            console.log("fun1");
            dispatch(action)
        }
    }
}
function fun2(store) {
    return (dispatch) => {
        return (action) => {
            console.log("fun2");
            dispatch(action)
        }
    }
}
// let store = createStore(reducer, applyMiddleware(fun1, fun2))
let store = myMiddleware(fun1, fun2)(createStore)(reducer)

// //增强dispatch
// let oldDispatch = store.dispatch
// store.dispatch = (...arg) => {
//     console.log('旧的store:', store.getState());
//     oldDispatch(...arg)
//     console.log('新的store:', store.getState());
//     console.log("");
// }

console.log(store);
console.log(store.getState());
let dispatch = bindActionCreators(action, store.dispatch)
console.log(dispatch);
dispatch.increaseAction()
dispatch.addUserAction({ name: 132, id: 1 })
dispatch.addUserAction({ name: 456, id: 2 })
dispatch.setAction(56)
dispatch.updateUserAction({ id: 1, name: '改变后的用户名字' })
console.log(store.getState());
console.log(store);




// let unSubscribe = store.subscribe(() => {
//     console.log("store改变了");
// })
// store.subscribe(() => {
//     console.log("store改变了2");
// })
// store.dispatch(action.increaseAction())
// console.log(store.getState());
// store.dispatch(action.increaseAction())
// console.log(store.getState());
// unSubscribe()
// unSubscribe()
// store.dispatch(action.increaseAction())
// console.log(store.getState());

// let dispatch = bindActionCreators(action, store.dispatch)
// console.log(123132);
// console.log(dispatch);
// dispatch.setAction(10)
// console.log(store.getState());