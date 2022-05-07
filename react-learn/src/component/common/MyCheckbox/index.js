import React, { Component } from 'react'
export default class MyCheckbox extends Component {

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
                        console.log(newSelect);
                        this.props.onChange && this.props.onChange(newSelect,this.props.name)
                    }} name={this.props.name} type="checkbox" value={it.id}></input>
                </label>
            )
        })
        console.log(list);
        return (
            <>
                {list}
            </>
        )
    }
}