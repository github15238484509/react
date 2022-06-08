import React from 'react'
import styles from "./index.css"
import { connect } from "umi"

function getState(loading, user) {
  if (loading === true && user === null) {
    return "恢复中..."
  } else if (loading === false && user !== null) {
    return user
  } else {
    return "登陆中..."
  }
}
function index(props) {
  let state = getState(props.state.loading, props.state.user)
  return (
    <div className={styles.headerbox}>
      <div className={styles.logo}>
        这是标题
      </div>
      <div className={styles.user}>
        欢迎你 {state}
        <button>退出</button>
      </div>
    </div>
  )
}
function mapToPoprs(state) {
  return {
    state: state.loginUser
  }
}
export default connect(mapToPoprs, null)(index)