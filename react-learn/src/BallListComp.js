import React, { Component } from 'react'
import BallClassComp from './BallClassComp'
import { getRandom } from './utils'
export class BallListComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.time = null
        this.init()
    }
    init() {
        clearInterval(this.time)
        this.time = setInterval(() => {
            let info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`,
                xSpeed: getRandom(500, 1000),
                ySpeed: getRandom(500, 1000)
            }
            let newList = [...this.state.list, info]
            this.setState({
                list: newList
            })
            if (newList.length >= 10) {
                clearInterval(this.time)
                return
            }
        }, 1000);
    }
    render() {
        let list = this.state.list.map((it, key) => <BallClassComp key={key} {...it}></BallClassComp>)
        return (
            <>
                {list}
            </>
        )
    }
}