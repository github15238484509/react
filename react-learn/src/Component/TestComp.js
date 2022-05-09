import React from 'react'
export class A extends React.Component {
    componentDidMount() {
        console.log("A组件调用了");
    }
    render() {
        return (
            <>
                <span>A组件</span>
                <div>
                   孩子：{this.props.children}
                </div>
            </>
        )
    }
}
export class B extends React.Component {
    render() {
        return (
            <>
                <span>B:{this.props.num}</span>
            </>
        )
    }
}