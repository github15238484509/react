/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM1 from 'react-dom';
import FromTest from './component/From/test';
const root = ReactDOM.createRoot(document.getElementById('root'));
let A = () => {
  return (ReactDOM1.createPortal(
    <React.StrictMode>
      <span>  456</span>
    </React.StrictMode>, document.getElementById('root1')))
}
root.render(
  <React.StrictMode>
    <FromTest></FromTest>
    <A></A>
  </React.StrictMode>
);




