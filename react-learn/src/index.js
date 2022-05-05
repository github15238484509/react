/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function App(props) {
  console.log(props);
  return (<div>
    App的内容
    <p>
      {props.children}
    </p>
  </div>)
}




root.render(
  <React.StrictMode>
    <App content="这是content的内容" children="789" className="465">传入的文字</App>
  </React.StrictMode>
);




