import React, { Component } from 'react'
export default class MyRadio extends Component {

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