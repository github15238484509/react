import React from 'react'
import styles from "./index.css"
import { NavLink } from "umi"

export default function index() {
    return (
        <nav className={styles.nav}>
            <NavLink exact activeClassName={styles.active} to="/">首页</NavLink>
            <NavLink exact activeClassName={styles.active} to="/student">学生查询</NavLink>
            <NavLink exact activeClassName={styles.active} to="/student/add">添加学生</NavLink>
        </nav>
    )
}
