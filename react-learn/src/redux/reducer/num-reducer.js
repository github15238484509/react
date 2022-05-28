
import { actionTypes } from "../action";

export default function numReducer(state=0, { type, payload = "" }) {
    switch (type) {
        case actionTypes.INCREASE:
            return state + 1;
        case actionTypes.DECREASE:
            return state - 1;
        case actionTypes.SETNUMBER:
            return payload;
        default:
            return state;
    }
}