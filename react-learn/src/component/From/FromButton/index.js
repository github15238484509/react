import React, { Component } from 'react'
import { Consumer } from '../FromContext'
export default class FromButton extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <button onClick={value.sumbit}>{this.props.children || '提交'}</button>
                    )
                }}
            </Consumer>

        )
    }
}
