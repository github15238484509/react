import React from 'react'

export class TickStatusComp extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         remainTime: this.props.time
    //     }
    //     this.time = setInterval(() => {
    //         this.setState({
    //             remainTime: this.state.remainTime - 1
    //         })
    //     }, 1000)
    // }

    state = {
        remainTime: this.props.time,
        n: 132
    }
    time = setInterval(() => {
        this.setState({
            remainTime: this.state.remainTime - 1
        })
        if (this.state.remainTime === 0) {
            clearInterval(this.time)
            return
        }
    }, 1000)
    render() {
        console.log("父亲");
        return <>
            <div>
                剩余时间为：{this.state.remainTime}
                <p>{this.state.n}</p>
                <InfoComp></InfoComp>
            </div>
        </>
    }
}

// eslint-disable-next-line no-unused-vars
function InfoComp() {
    console.log("父亲22");
    // eslint-disable-next-line react/jsx-no-undef
    return <p>132</p>
}