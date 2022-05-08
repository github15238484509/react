import React from 'react'
// import ThreeLayout from './component/common/ThreeLayout'
import MyInput from './component/common/MyInput'
import MyCheckbox from './component/common/MyCheckbox'
import MyRadio from './component/common/MyRadio'
import Module from './component/common/Module'
export default class App extends React.Component {
    state = {
        input: "132",//
        arrlist: [{
            id: "1",
            text: '苹果'
        }, {
            id: "2",
            text: '西瓜'
        }, {
            id: "3",
            text: '香蕉'
        }, {
            id: "4",
            text: '哈密瓜'
        }],
        selectList: ["1", "3"],
        radioVlue:"1"
    }
    setChange = (value, name) => {
        console.log(value, name);
        console.log(value, name);
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <Module></Module>
                <MyRadio name="radioVlue" value={this.state.radioVlue} listArr={this.state.arrlist} onChange={this.setChange}></MyRadio>
                <MyCheckbox name="selectList" selectList={this.state.selectList} listArr={this.state.arrlist} onChange={this.setChange}></MyCheckbox>
                <MyInput value={this.state.input} name="input" onChange={this.setChange}></MyInput>
            </div >
        )
    }
}
