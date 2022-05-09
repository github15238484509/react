/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

class A extends React.Component {
  handle() {
    console.log("ahaha");
  }
  render() {
    return (
      <input></input>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.handle = this.handle.bind(this)
    this.tt = React.createRef()
    this.txt = React.createRef()
  }
  handle = function () {
    console.log(this.tt);
    console.log(this.tt.current.handle());

    this.txt.current.focus()
  }
  render() {
    return (
      <>
        <A ref={this.tt}></A>
        <input ref={this.txt}>
        </input>
        <button onClick={this.handle}> 点击聚焦</button></>
    )
  }
}


root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);




