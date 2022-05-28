export const INCREASE = "increase"
export const DECREASE = "decrease"
export const SETNUMBER = "set"
export function increaseAction() {
    return {
        type: INCREASE
    }
}
export function decreaseAction() {
    return {
        type: DECREASE
    }
}
export function setAction(num) {
    return {
        type: SETNUMBER,
        payload: num
    }
}


const numAction = {
    increaseAction,
    decreaseAction,
    setAction
}
export const numActionTypes = {
    INCREASE,
    DECREASE,
    SETNUMBER
}

export default numAction