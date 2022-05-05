import React from "react";
export default class MyClassComp extends React.Component {
    render() {
        console.log(this);
        return <div>类组件的内容 {this.props.number} {this.props.com}</div>
    }

}
