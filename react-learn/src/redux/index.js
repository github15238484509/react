
// import { createStore, bindActionCreators, applyMiddleware } from "redux"
import { createStore, bindActionCreators, myMiddleware } from "./redux"
import reducer from "./reducer"
import action from "./action/index"
import logger from "redux-logger"
import { setMyAction } from "./action/num-action"
// import thunk from "redux-thunk"
function thunk(store) {
    return (next) => {
        return (action) => {
            console.log(123123, action);
            if (typeof action === "function") {
                console.log(action);
                return action(next)
            } else {
                return next(action)
            }
        }
    }
}
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
// let store = createStore(reducer, applyMiddleware(thunk, fun1, fun2, logger))
let store = myMiddleware(thunk, fun1, fun2, logger)(createStore)(reducer)

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
dispatch.setAction(50)
store.dispatch(setMyAction())
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