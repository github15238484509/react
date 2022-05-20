/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useEffect, useRef } from 'react'
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { user } from "../../api/login"
function WithRouter(Child, isLogin = false) {
  if (isLogin) {
    return (props) => {
      const navigate = useNavigate();
      const location = useLocation();
      const timeId = useRef()
      if (user.login) {
        return <Child {...props} navigate={navigate} location={location}></Child>
      }
      useEffect(() => {
        timeId.current = setTimeout(() => {
          navigate("/?returnUrl=" + location.pathname)
        }, 2000)
        return () => {
          console.log(5555555555);
          clearTimeout(timeId.current)
          timeId.current = null
        }
      })
      return "2s后自动去登陆"
    }
  } else {
    return (props) => {
      const navigate = useNavigate();
      const location = useLocation();
      return <Child {...props} navigate={navigate} location={location}></Child>
    }
  }
}

class Persion extends Component {
  render() {
    console.log(this);
    return '当你看此页面说明你已经登录了。靓仔'
  }
}

export default WithRouter(Persion, true)



