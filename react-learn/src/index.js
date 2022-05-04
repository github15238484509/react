/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import src1 from "./assets/1.gif";
import src2 from "./assets/2.webp";
import src3 from "./assets/3.webp";

const root = ReactDOM.createRoot(document.getElementById('root'));

let arr = [src1, src2, src3];
let index = 0
function start() {
  setInterval(() => {
    index = (index + 1) % 3
    render()
  }, 1000)
}
function render() {
  let img = <img src={arr[index]}></img>
  root.render(
    <React.StrictMode>
      {img}
    </React.StrictMode>
  );
}
start()



