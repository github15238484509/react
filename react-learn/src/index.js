import React from 'react';
import ReactDOM from 'react-dom/client';
import TickComp from './Tick';
import { TickControl } from './TickControl';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TickControl time={10}></TickControl>
  </React.StrictMode>
);



