import React from "react";


export default class MyClassComp extends React.Component {
    render() {
        console.log(this);
        return <div>类组件的内容 {this.props.number} {this.props.com}</div>
    }

}


// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class MyClassComp extends Component {
//   render() {
//     return (
//       <div>MyClassComp</div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(MyClassComp)