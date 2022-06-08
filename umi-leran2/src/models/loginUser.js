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
    subscriptions: {
        async asyncLogin({ dispatch, history }) {
            let user = localStorage.getItem("user")
            if (user) {
                dispatch({
                    type: "setLodin",
                    payload: true
                })
                await delay(1000)
                dispatch({
                    type: "setLoginUser",
                    payload: user
                })
                dispatch({
                    type: "setLodin",
                    payload: false
                })
            } else {
                history.push("/login")
            }
        }
    },
    effects: {
        *login({ payload }, { put, call }) {
            yield put({ type: "setLodin", payload: true })
            yield call(delay, 1000)
            yield put({ type: "setLodin", payload: false })
            if (payload.account === "admin") {
                yield put({ type: "setLoginUser", payload: payload.account })
                localStorage.setItem("user", payload.account)
                return true
            } else {
                yield put({ type: "setLoginUser", payload: null })
                localStorage.removeItem("user")
                return false
            }
        },
        *logout({ }, { put, call }) {
            yield put({ type: "setLodin", payload: false })
            yield call(delay, 1000)
            yield put({ type: "setLoginUser", payload: null })
            localStorage.removeItem("user")
        }
    }
}

