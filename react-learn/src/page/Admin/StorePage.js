import React from 'react'
import store from "../../redux/index"
import action from "../../redux/action"
import { connect } from 'react-redux'
function StorePage(props) {
  return (
    <div>StorePage
      <h2><span>{props.number}</span></h2>
      <button onClick={props.increase}>increase</button>
      <button onClick={props.decrease}>decrease</button>
    </div>
  )
}
function getState(state) {
  return {
    number: state.num
  }
}
function getDispatch(dispatch) {
  return {
    increase() {
      dispatch(action.increaseAction())
    },
    decrease() {
      dispatch(action.decreaseAction())
    }
  }
}

export default connect(getState, getDispatch)(StorePage)
// export default class StorePageContainer extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = getState(store.getState())
//     this.events = getDispatch(store.dispatch)

//   }
//   componentDidCatch() {
//     this.timer && this.timer()
//   }
//   componentDidMount() {
//     this.timer = store.subscribe(() => {
//       this.setState(getState(store.getState()))
//     })
//   }
//   render() {
//     return <StorePage {...this.events} number={this.state.number}></StorePage>
//   }
// }