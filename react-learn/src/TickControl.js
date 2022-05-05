import React, { Component } from 'react'
import TickComp from './Tick'

export class TickControl extends Component {
    state = {
        isOver: false,
        isKey: "123"
    }
    render() {
        let note = ""
        if (this.state.isOver) {
            note = "倒计时结束了"
        } else {
            note = "倒计时正在进行中.."
        }
        return (
            <>
                <TickComp key={this.state.isKey} time={10} onOver={
                    () => {
                        console.log(12);
                        this.setState({
                            isOver: true,
                            isKey: 852
                        })
                    }
                } />
                <h2>
                    {note}
                </h2>
            </>
        )
    }
}