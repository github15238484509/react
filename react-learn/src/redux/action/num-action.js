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
export function setMyAction() {
    return (dispatch) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*100)
            dispatch(setAction(num))
        }, 1000);
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