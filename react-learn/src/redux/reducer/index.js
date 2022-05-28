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
// export default combineReducers({
//     num: numReducer,
//     user: userReducer
// })
export default myCombineReducers({
    num: numReducer,
    user: userReducer
})

function myCombineReducers(reducers) {
    return (state = {}, action) => {
        let result = {}
        for (const key in reducers) {
            if (Object.hasOwnProperty.call(reducers, key)) {
                let fu = reducers[key]
                result[key] = fu(state[key], action)
            }
        }
        return result
    }
}

