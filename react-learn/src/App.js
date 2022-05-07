import React from "react";


export default class App extends React.Component {
    state = {
        account: "",
        password: '',
        hobby: [{
            id: 1,
            text: '爱吃'
        }, {
            id: 2,
            text: '爱玩'
        }, {
            id: 3,
            text: '爱睡'
        }, {
            id: 4,
            text: '爱人'
        }, {
            id: 5,
            text: '挨揍'
        }, {
            id: 6,
            text: '苹果'
        }],
        like: [1, 6],
        newlike: '',
        textarea: "789"
    }
    changeHandle = (val, name) => {
        console.log(val, name);
        this.setState({
            [name]: val
        })
    }
    onChange = (e) => {
        let target = e.target
        let val = target.value
        let name = target.name
        this.changeHandle(val, name)
    }
    getState = () => {
        console.log(this.state);
    }
    render() {
        let checkbox = this.state.hobby.map((it) => {
            return (
                <label key={it.id}>
                    {it.text}
                    <input checked={
                        this.state.like.includes(it.id)
                    } name="like" type="checkbox" onChange={(e) => {
                        let newLike = null
                        if (e.target.checked) {
                            newLike = [...this.state.like, it.id]
                        } else {
                            newLike = this.state.like.filter((item) => {
                                return item !== it.id
                            })
                            console.log(newLike);
                        }
                        this.changeHandle(newLike, e.target.name)
                    }}></input>
                </label>
            )
        })

        let opstion = this.state.hobby.map(it => <option key={it.id} value={it.id}>{it.text}</option>)
        return (
            <>
                <input name="account" onChange={(e) => {
                    this.onChange(e)
                }} value={this.state.account}></input>
                <input name="password" onChange={(e) => {
                    this.onChange(e)
                }} value={this.setState.password}></input>

                {checkbox}

                <select defaultValue={this.state.newlike} name="newlike" onChange={(e) => {
                    console.log(e);
                    this.onChange(e)
                }}>
                    <option key={""} value="">请选择</option>
                    {opstion}
                </select>

                <textarea value={this.state.textarea} onChange={e => {
                    this.onChange(e)
                }} name="textarea"></textarea>
                <button onClick={this.getState}>获取数据</button>
            </>
        )
    }
}
