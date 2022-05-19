
import React, { useEffect } from 'react'
import "./index.css"

export default function MyHeader() {
   
    return (
        <div className='my-header'>
            <h1>这是网站logo</h1>

            <div>
                <span>用户姓名</span>
                <button>退出</button>
            </div>
        </div>
    )
}
