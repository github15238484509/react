
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

export default function MyHeader() {
   
    return (
        <div className='my-header'>
            <h1><Link to={"/login"}>这是网站logo</Link></h1>

            <div>
                <span>用户姓名</span>
                <button>退出</button>
            </div>
        </div>
    )
}
