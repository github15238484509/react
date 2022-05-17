import React, { useState } from 'react'
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group"
import "./app.css"




export default function App() {
    const [list, setlist] = useState([{
        name: 1,
        id: 1
    }, {
        name: 2,
        id: 2
    }, {
        name: 3,
        id: 3
    }])
    return (
        <div>
            <div className='container'>
                <TransitionGroup appear >
                    {
                        list.map((it) => {
                            return (
                                <CSSTransition timeout={1000} key={it.id}>
                                    <h2 onClick={
                                        ()=>{
                                            setlist(
                                                list.filter((i) => {
                                                    return i.id !== it.id
                                                })
                                            )
                                        }
                                    }>{it.name}</h2>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
            <button type="button" onClick={() => {
                setlist(
                    [...list, {
                        name: list.length + 1,
                        id: list.length + 1
                    }]
                )
            }
            }>
                添加
            </button>
        </div>
    );
}