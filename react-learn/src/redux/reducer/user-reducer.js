
import { actionTypes } from "../action";

export default function userReducer(state = [], { type, payload = "" }) {
    switch (type) {
        case actionTypes.addUser:
            return [...state, payload];
        case actionTypes.deleteUser:
            return state.filter(it => it.id !== payload);
        case actionTypes.updateUser:
            return state.map(it => it.id === payload.id ? { ...it, ...payload } : it);
        default:
            return state;
    }
}