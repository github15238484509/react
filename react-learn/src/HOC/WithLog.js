import React from 'react'

export function WithLog(Comp) {
    return class WithLog extends React.Component {
        componentDidMount() {
            console.log(`在WithLog中执行了${Comp.name}`);
        }
        componentWillUnmount() {
            console.log(`在WithLog中执行了"componentWillUnmount"${Comp.name}`);
        }
        render() {
            return (<Comp {...this.props}></Comp>)
        }
    }
} 