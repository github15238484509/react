import React from 'react';
import ReactDOM from 'react-dom/client';
import MyFunctionComp from './MyFunctionComp';
import MyClassComp from './MyClassComp';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(MyClassComp);
// function MyFunctionComp() {
//   return <div>
//     <span>哈哈</span>
//   </div>
// }

root.render(
  <React.StrictMode>
    <MyFunctionComp number={5} />
    <MyClassComp number={66} com={<MyFunctionComp number={5} />}></MyClassComp>
  </React.StrictMode>
);



