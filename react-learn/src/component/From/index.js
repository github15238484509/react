import React, { Component } from 'react'
import { Provider } from './FromContext'
import FromInput from './FromInput';
import FromButton from './FromButton';
import PropTypes from "prop-types"
export default class From extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        defaultValue: PropTypes.shape({})
    }
    state = {
        fromData: {
            ...this.props.defaultValue
        },
        change: (name, value) => {
            this.setState({
                fromData: {
                    ...this.state.fromData,
                    [name]: value
                }
            })
        },
        sumbit: (e) => {
            e.preventDefault()
            this.props.onSubmit && this.props.onSubmit(this.state.fromData)

            return false
        }
    }
    render() {
        return (
            <form onSubmit={this.state.sumbit}>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </form>
        )
    }
}
From.input = FromInput
From.button = FromButton
