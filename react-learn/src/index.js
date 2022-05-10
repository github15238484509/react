/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function B(props, ref) {
  console.log(props, ref);
  return (
    <h1 ref={ref}>B</h1>
  )
}
let NewB = React.forwardRef(B)
class A extends React.Component {
  state = {
    ref: React.createRef()
  }
  componentDidMount() {
    console.log(this.state.ref.current);
  }
  render() {
    return (
      <NewB ref={this.state.ref}></NewB>
    )
  }
}

root.render(
  <React.StrictMode>
    <A></A>
  </React.StrictMode>
);




