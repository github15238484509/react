import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class MyInput extends Component {
    static defaultProps = {
        value:''
    }
    static propTypes = {
        name:PropTypes.string.isRequired,
        value:PropTypes.string,
        onChange:PropTypes.func
    }
    render() {
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

