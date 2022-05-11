import React, { Component } from 'react'

import txt from '../FromContext'

let values = ["radio", "checkbox"]
export default class FromInput extends Component {
    constructor(props) {
        super(props)
        if (values.includes(props.type)) {
            throw new Error(`不支持类型：${props.type}`)
        }
    }
    static defaultProps = {
        type: "text"
    }
    static contextType = txt

    render() {
        return (
            <input name={this.props.name}
                type={this.props.type}
                value={
                    this.context.fromData[this.props.name] || ""
                }
                onChange={
                    (e) => {
                        let value = e.target.value
                        this.context.change && this.context.change(this
                            .props.name, value)
                    }
                }
            ></input>
        )
    }
}
