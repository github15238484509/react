/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'

const root = ReactDOM.createRoot(document.getElementById('root'));

class A extends React.Component {
  state = {
    a: '我是a的内容'
  }
  constructor(props) {
    super(props)
    console.log("...");
  }
  static childContextTypes = {
    a:PropTypes.string
  }
  getChildContext=()=>{
    return {
      a:"87465"
    }
  }
  change = () => {
    this.setState({
      a: `我是a的内容我变心了${Math.random()}`
    })
  }
  render() {
    return (
      <>
        <h2>A</h2>
        <B></B>
      </>
    )
  }
}

class B extends React.Component {
  static contextType = {
    a: PropTypes.string
  }
  constructor(props, context) {
    super(props)
    console.log(context);
  }
  render() {
    console.log(this);
    return (
      <>
        <h2>B:{this.context.a}</h2>
        <C></C>
      </>
    )
  }
}

class C extends React.Component {
  render() {

    return (
      <h2>C</h2>
    )
  }
}


root.render(
  <React.StrictMode>
    <A></A>
  </React.StrictMode>
);




