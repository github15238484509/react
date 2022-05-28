
// import { createStore, bindActionCreators } from "redux"
import { createStore, bindActionCreators } from "./redux"
import reducer from "./reducer"
import action from "./action/index"
let store = createStore(reducer)
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