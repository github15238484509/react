/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


let textA = React.createContext()
let textB = React.createContext()


class A extends React.Component {
  state = {
    a: '我a的内容'
  }
  change = () => {
    this.setState({
      a: `我是a的内容我变心了${Math.random()}`
    })
  }
  render() {
    let Provider = textA.Provider
    return (
      <>
        <h2>A</h2>
        <button onClick={this.change}>改变a的数据</button>
        <Provider value={{
          a: this.state.a
        }}>
          <B></B>
        </Provider>
      </>
    )
  }
}

class B extends React.Component {
  state = {
    b: '我是b的内容'
  }
  change = () => {
    this.setState({
      b: `我是b的内容我变心了${Math.random()}`
    })
  }
  render() {
    return (
      <textB.Provider value={{
        b: this.state.b
      }}>
        <textA.Consumer>
          {
            (value) => (
              <>
                <h2>B:{value.a}</h2>
                <C></C>
                <button onClick={this.change}>改变b的数据</button>
              </>
            )
          }
        </textA.Consumer>
      </textB.Provider>
    )
  }
}

class C extends React.Component {
  render() {
    return (
      <textB.Consumer>
        {valueb => (
          <textA.Consumer>
            {
              (value) => (
                <>
                  <h2>C:{value.a}</h2>
                  <h2>C:{valueb.b}</h2>
                </>
              )
            }
          </textA.Consumer>
        )}
      </textB.Consumer>
    )
  }
}


root.render(
  <React.StrictMode>
    <A></A>
  </React.StrictMode>
);




