import React from 'react'
import "./Ball.css"
export default class BallClassComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: props.x || 0,
            top: props.y || 0,
            x: 1
        }
        this.bg = props.bg || "pink"
        this.xSpeed = props.xSpeed || 1000//每秒移动多少像素
        this.ySpeed = props.ySpeed || 1000
        this.time = null
        this.init()
    }
    init() {
        let time = 16
        clearInterval(this.time)
        this.time = setInterval(() => {
            let xdis = this.xSpeed / 1000 * time
            let Ydis = this.ySpeed / 1000 * time
            let newLeft = this.state.left + xdis;
            let newTop = this.state.top + Ydis;
            if (newLeft <= 0) {
                newLeft = 0
                this.xSpeed = this.xSpeed * -1
            } else if (newLeft >= (document.documentElement.clientWidth - 100)) {
                newLeft = (document.documentElement.clientWidth - 100)
                this.xSpeed = this.xSpeed * -1
            }
            if (newTop <= 0) {
                newTop = 0
                this.ySpeed = this.ySpeed * -1
            } else if (newTop >= (document.documentElement.clientHeight - 100)) {
                newTop = (document.documentElement.clientHeight - 100)
                this.ySpeed = this.ySpeed * -1
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        }, time);
    }
    render() {
        return (
            <div className='ball' style={{
                left: this.state.left,
                top: this.state.top,
                background: this.bg
            }}></div>

        )
    }
}