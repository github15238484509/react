import React from 'react'
export default class TickComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: props.time
        }
        this.time = null
        this.init()
    }
    init() {
        clearInterval(this.time)
        this.time = setInterval(() => {
            let newTime = this.state.time - 1
            if (newTime < 0) {
                clearInterval(this.time)
                this.props.onOver && this.props.onOver()
                return
            }
            this.setState({
                time: newTime
            })
        }, 500);
    }
    render() {
        return (
            <div>
                当前的倒计时：{this.state.time}
            </div>
        )
    }
}