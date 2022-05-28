import numAction, { numActionTypes } from "./num-action"
import userAction, { userActionTypes } from "./user-action"


export const actionTypes = {
    ...numActionTypes,
    ...userActionTypes
}
const action = {
    ...numAction,
    ...userAction
}
export default action
