import React, { useState } from 'react'
import { Transition, CSSTransition } from "react-transition-group"
import "./app.css"


function Comp1({ visibility }) {
    return <CSSTransition appear mountOnEnter in={visibility} timeout={1000}>
        <h1 className='title'>Comp1</h1>
    </CSSTransition>
}
function Comp2({ visibility }) {
    return <CSSTransition appear mountOnEnter in={visibility} timeout={1000}>
        <h1 className='title'>Comp2</h1>
    </CSSTransition>
}

export default function App() {
    const [visibility, setVisibility] = useState(true);

    return (
        <div>
            <div className='container'>
                <Comp1 visibility={visibility}></Comp1>
                <Comp2 visibility={!visibility}></Comp2>
            </div>
            <button type="button" onClick={() => setVisibility(!visibility)}>
                toggle
            </button>
        </div>
    );
}