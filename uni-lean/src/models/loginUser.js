import { delay } from "../../utils/delay"
export default {
    state: {
        user: null,
        loading: false
    },
    reducers: {
        setLoginUser(state, action) {
            return {
                ...state,
                user: action.payload
            }
        },
        setLodin(state, action) {
            return {
                ...state,
                loading: action.payload
            }
        }
    },
    effects: {
        *login({ payload }, { put, call }) {
            yield put({ type: "setLodin", payload: true })
            yield call(delay, 1000)
            yield put({ type: "setLoginUser", payload })
            localStorage.setItem("user", payload)
        },
        *logout({ }, { put, call }) {
            yield put({ type: "setLodin", payload: false })
            yield call(delay, 1000)
            yield put({ type: "setLoginUser", payload: null })
            localStorage.removeItem("user")
        }
    }
}

