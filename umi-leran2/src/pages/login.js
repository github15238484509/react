import React from 'react'
import LoginFrom from "../component/LoginFrom"
import { connect, history } from "umi"
function login(porps) {
  return (
    <LoginFrom user={porps.state.user} loading={porps.state.loading} onSubmit={porps.onSubmit}></LoginFrom>
  )
}
function mapToPoprs(state) {
  return {
    state: state.loginUser
  }
}
function mapdispath(dispatch, {location}) {
  return {
    async onSubmit(account, password) {
      console.log(account, password);
      let result = await dispatch({
        type: 'loginUser/login',
        payload: {
          account,
          password
        }
      })
      if (result) {
        history.push(location.query.page || "/");
      }
    }
  }
}
export default connect(mapToPoprs, mapdispath)(login)