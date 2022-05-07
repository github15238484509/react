import React, { Component } from 'react'


export default class MyInput extends Component {
    render() {
        console.log(this.props);
        return (
            <input name={this.props.name} value={this.props.value} onChange={
                (e) => {
                    let target = e.target
                    this.props.onChange && this.props.onChange(target.value, target.name)
                }
            }></input>
        )
    }
}

