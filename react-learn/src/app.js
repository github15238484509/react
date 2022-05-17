import React, { useState } from 'react'
import { Transition,CSSTransition } from "react-transition-group"
import "./app.css"


const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};
// export default function App() {
//     let [boolean, setBoolean] = useState(false)

//     return (
//         <>
//             <Transition mountOnEnter in={boolean} timeout={duration}>
//                 {state => {
//                     console.log(state);
//                     return (
//                         <div style={{
//                             ...defaultStyle,
//                             ...transitionStyles[state]
//                         }}>
//                             I'm a fade Transition!
//                         </div>
//                     )
//                 }}
//             </Transition>
//             <button onClick={() => {
//                 setBoolean(!boolean)
//             }}>toggle</button>
//         </>
//     )
// }
export default function App() {
    const [inProp, setInProp] = useState(false);

    return (
        <div>
            <CSSTransition in={inProp} timeout={2000} classNames="my-node">
                <div>
                    {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(true)}>
                Click to Enter
            </button>
        </div>
    );
}