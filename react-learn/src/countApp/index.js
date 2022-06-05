import { connect } from "dva"

function App(props) {
    return <div>
        <h2>{props.number}</h2>
        <p><button onClick={props.onDecrease}> - </button></p>
        <p><button onClick={props.onIncrease}> + </button></p>
        <p><button onClick={props.onAsyncDecrease}> 异步减 </button></p>
        <p><button onClick={props.onAsyncIncrease}> 异步加 </button></p>
    </div>
}

function mapStateToProps(state) {
    return {
        number: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch({
                type: "count/increase"
            })
        },
        onDecrease() {
            dispatch({
                type: "count/decrease"
            })
        },
        onAsyncIncrease() {
            dispatch({
                type: "count/asyncIncrease"
            })
        },
        onAsyncDecrease() {
            dispatch({
                type: "count/asyncDecrease"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)