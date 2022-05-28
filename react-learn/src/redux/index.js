
import { createStore, bindActionCreators } from "redux"
import reducer from "./reducer"
import action from "./action/index"
let store = createStore(reducer)
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