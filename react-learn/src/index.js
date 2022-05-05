import React from 'react';
import ReactDOM from 'react-dom/client';
import {BallListComp} from './BallListComp';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <BallClassComp></BallClassComp> */}
    <BallListComp></BallListComp>
  </React.StrictMode>
);



