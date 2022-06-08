import React from 'react'
import styles from "./index.css"
export default function index() {
  return (
    <div className={styles.headerbox}>
      <div className={styles.logo}>
        这是标题
      </div>
      <div className={styles.user}>
        欢迎你 二蛋
        <button>退出</button>
      </div>
    </div>
  )
}
