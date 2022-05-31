
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
function MyHeader() {
    console.log("异步加载login");
    return (
        <div className='my-header'>
            <h1><Link to={"/login"}>异步加载login</Link></h1>

            <div>
                <span>用户姓名</span>
                <button>退出</button>
            </div>
        </div>
    )
}

export default React.memo(MyHeader)
