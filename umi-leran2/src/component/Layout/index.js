import React from 'react'
import styles from "./index.css"
export default function index(props) {
    return (
        <>
            <header className={styles.header}>
                {props.header}
            </header>
            <div className={styles.mainbox}>
                <aside className={styles.aside}>
                    {props.aside}
                </aside>
                <main className={styles.main}>
                    <div className={styles.mainConrentBox}>
                        {props.main || props.children}
                    </div>
                </main>
            </div>
        </>
    )
}