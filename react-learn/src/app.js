import React, { useState, useEffect } from "react"

//使用useState
// export default function App() {
//     const [n, setN] = useState(0)
//     return (
//         <div>
//             <button onClick={() => {
//                 setN(n - 1)
//             }
//             }>-</button>
//             {n}
//             <button onClick={() => {
//                 setN(n + 1)
//             }
//             }>+</button>
//         </div>
//     )
// }

//useState返回值的第二个参数的执行规则，会合并
// export default function App() {
//     const [n, setN] = useState(0)
//     return (
//         <div>
//             <button onClick={() => {
//                 setN(n - 1)
//             }
//             }>-</button>
//             {n}
//             <button onClick={() => {
//                 setN(pre => pre + 1)
//                 setN(n + 1)
//             }
//             }>+</button>
//         </div>
//     )
// }


// useEffect
//useEffect会在组件挂在到dom中之后执行 他和useState一样会挂在到react组件的节点上
//useEffect有返回值，返回值是一个函数，会在每一次渲染挂在到dom上之后运行，会在usrEffect的函数之前运行，第一次渲染不会运行，因为都找不到这个函数
// export default function App() {
//     const [n, setN] = useState(0)
//     useEffect(() => {
//         document.title = n
//         console.log("effect")
//         return () => console.log("return")
//     })
//     console.log("render")
//     return (
//         <div>
//             <button onClick={() => {
//                 setN(n - 1)
//             }
//             }>-</button>
//             {n}
//             <button onClick={() => {
//                 setN(pre => pre + 1)
//                 setN(n + 1)
//             }
//             }>+</button>
//         </div>
//     )
// }

//useEffect的第二个参数，可以决定，要不要在下一个渲染的时候知否执行，他会只用Object.is（） 判断时候相等，相等就不用执行，否则就会执行useEffect
//sueEffect传递引用值的时候想让其改变一定要传递一个新的引用值，不然不改变
export default function App() {
    const [n, setN] = useState({ aa: 1 })
    useEffect(() => {
        document.title = n
        console.log("effect")
        return () => console.log("return")
    }, [n])
    console.log("render")
    return (
        <div>
            <button onClick={() => {
                setN(n - 1)
            }
            }>-</button>
            {n.aa}
            <button onClick={() => {
                setN((pre) => {
                    console.log(pre);
                    pre.aa = 6
                    return pre
                })
            }
            }>+</button>
        </div>
    )
}