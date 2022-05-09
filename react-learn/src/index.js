/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { A, B } from './Component/TestComp';
import { WithLog } from './HOC/WithLog';
let ALog = WithLog(A)
let BLog = WithLog(B)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ALog>852</ALog>
    <br></br>
    <BLog num="3565"></BLog>
  </React.StrictMode>
);



