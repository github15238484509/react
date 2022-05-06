import React from 'react'
import "./index.css"
export default function ThreeLayout(props) {
    let defaultPorPS = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800
    }

    let data = Object.assign({}, defaultPorPS, props)
    return (
        <div className='three-layout' style={
            {
                minWidth: data.minWidth
            }
        }>
            <div className='layout-main'>
                {data.children}
            </div>
            <div className='layout-left'
                style={{
                    maxWidth: data.leftWidth
                }}
            >
                {data.left}
            </div>
            <div className='layout-righ'
                style={{
                    maxWidth: data.rightWidth
                }}
            >
                {data.right}
            </div>
        </div>
    )
}
