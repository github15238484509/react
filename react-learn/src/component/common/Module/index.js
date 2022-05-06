import React from 'react'
import "./index.css"
export default function Module(props) {
    let data = {
        bg: 'rgba(0,0,0,0.3)'
    }
    data = Object.assign({}, data, props)
    return (
        <div className='module' onClick={(e) => {
            if (e.target.className === "module" && data.onClick) {
                data.onClick()
            }
        }} style={{
            background: data.bg
        }}>
            <div className='module-center'>
                {data.children || "请填写内容"}
            </div>
        </div>
    )
}
