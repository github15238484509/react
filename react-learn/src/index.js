import React from 'react';
import ReactDOM from 'react-dom/client';
import { TickStatusComp } from './TickStatusComp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
   <TickStatusComp time={10}></TickStatusComp>
  </React.StrictMode>
);



