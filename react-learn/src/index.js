import React from 'react';
import dva from "dva"
import App from "./countApp"
import count from './countApp/count';
const app = dva()

app.model(count)

app.router(() => <App></App>)
app.start("#root")

console.log(app);


