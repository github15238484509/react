import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class MyRadio extends Component {
    static defaultProps = {
        listArr: [],
        selectList: [],
        value: ''
    }
    static propTypes = {
        listArr: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }
    render() {
        let list = this.props.listArr.map((it) => {
            return (
                <label key={it.id}>
                    {it.text} <input checked={it.id === this.props.value} onChange={(e) => {
                        this.props.onChange && this.props.onChange(it.id, this.props.name)
                    }} name={this.props.name} type="radio" value={it.id}></input>
                </label >
            )
        })
        return (
            <>
                {list}
            </>
        )
    }
}