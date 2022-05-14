import React, { useState, createContext, useContext } from 'react'

let txt = createContext()
// 元素方式
// function Test() {
//     return (
//         <txt.Consumer>
//             {
//                 (value) => (
//                     <span> test {value}</span>
//                 )
//             }
//         </txt.Consumer>
//     )
// }

//静态方法方式
// class Test extends React.Component {
//     static contextType = txt
//     render() {
//         console.log(this);
//         return (
//             <>
//                 <span> test {this.context}</span>
//             </>
//         )
//     }
// }

// 使用钩子函数的方式
function Test(prop) {
    let value = useContext(txt)
    return (
        <>
            <span> test {value}</span>
        </>
    )
}
export default function App() {
    return (
        <>
            <txt.Provider value={"这是上下文"}>
                <Test></Test>
            </txt.Provider>
        </>
    )
}