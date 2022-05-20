import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Login, Logout } from '../api/login'
import qs from "query-string"
export default function Welcome() {
    let navigate = useNavigate()
    let location = useLocation()
    return (
        <div>
            Welcome
            <button onClick={
                () => {
                    Login();
                    let { returnUrl } = qs.parse(location.search)
                    if (returnUrl) {
                        navigate(returnUrl)
                    } else {
                        navigate("/Student")
                    }
                }
            }>登录</button>

            <button onClick={
                () => {
                    Logout();
                }
            }>退出</button>
        </div >
    )
}
