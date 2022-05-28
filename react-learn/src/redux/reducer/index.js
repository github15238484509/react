import numReducer from "./num-reducer"
import userReducer from "./user-reducer"
import { combineReducers } from "redux"
// export default function reducer(state = {}, action) {
//     let newState = {
//         num: numReducer(state.num, action),
//         user: userReducer(state.user, action)
//     }
//     return newState
// }
export default combineReducers({
    num: numReducer,
    user: userReducer
})
