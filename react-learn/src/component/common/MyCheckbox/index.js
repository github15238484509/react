import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class MyCheckbox extends Component {
    static defaultProps = {
        listArr: [],
        selectList: []
    }
    static propTypes = {
        listArr: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        selectList: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    render() {
        let list = this.props.listArr.map((it) => {
            return (
                <label key={it.id}>
                    {it.text} <input checked={this.props.selectList.includes(it.id)} onChange={(e) => {
                        let newSelect = null;
                        let target = e.target
                        if (target.checked) {
                            newSelect = [...this.props.selectList, it.id]

                        } else {
                            newSelect = this.props.selectList.filter(item => item !== it.id)
                        }
                        this.props.onChange && this.props.onChange(newSelect, this.props.name)
                    }} name={this.props.name} type="checkbox" value={it.id}></input>
                </label>
            )
        })
        return (
            <>
                {list}
            </>
        )
    }
}