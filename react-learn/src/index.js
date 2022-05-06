/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Module from "./component/common/Module"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Module onClick={
      () => {
        console.log(4562);
      }
    }>
      <div style={{
        widht: 100,
        height: 200
      }}>
        <h1>
          这是h1的内容
        </h1>

      </div>
    </Module>
  </React.StrictMode>
);



