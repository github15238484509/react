import React, { useRef } from 'react'
import styles from "./index.css"

function getState(loading, user) {
    if (loading === false && user === null) {
        return "登录"
    } else if (loading === true && user === null) {
        return "登陆中..."
    } else if (loading === false && user !== null) {
        return "已登录"
    } else {
        return "登陆中..."
    }
}
export default function index(props) {
    let account = useRef()
    let password = useRef()
    let state = getState(props.loading, props.user)
    return (
        <form className={styles.from} onSubmit={(e) => {
            e.preventDefault()
            if (props.loading) {
                return
            }
            if (account.current.value && password.current.value) {
                props.onSubmit && props.onSubmit(account.current.value, password.current.value)
            } else {
                alert("完善信息")
            }
        }}>
            <label className={styles.laber}>
                <span>账号：</span>
                <input ref={account} type="text" name='account'></input>
            </label>
            <label className={styles.laber}>
                <span>账号：</span>
                <input ref={password} name='password' type="password"></input>
            </label>
            <label className={styles.laber}>
                <button>{state}</button>
            </label>
        </form>
    )
}
