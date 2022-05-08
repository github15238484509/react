import React from 'react'
import "./index.css"
import PropTypes from "prop-types"
Module.defaultProps = {
    bg: 'rgba(0,0,0,0.3)'
}
Module.propTypes = {
    data: PropTypes.shape({
        bg: PropTypes.string
    }),
    children: PropTypes.node,
    onClick: PropTypes.func
}
export default function Module(props) {
    return (
        <div className='module' onClick={(e) => {
            if (e.target.className === "module" && props.onClick) {
                props.onClick()
            }
        }} style={{
            background: props.bg
        }}>
            <div className='module-center'>
                {props.children || "请填写内容"}
            </div>
        </div>
    )
}
