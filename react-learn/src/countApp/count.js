
const count = {
    namespace: 'count',
    state: 0,
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            return state - 1
        }
    },
    effects: {
        *asyncIncrease(action, { put, call }) {
            yield call(delay, 1000)
            yield put({
                type: "increase"
            })
        },
        *asyncDecrease(action, { put, call }) {
            yield call(delay, 2000)
            yield put({ type: "decrease" })
        }
    },
    subscriptions: {
        one(e) {
            console.log(e);
            console.log(55555555555);
        }
    }

}

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}
export default count