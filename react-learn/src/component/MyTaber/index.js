

import React from 'react'
import "./index.css"
export default function MyTaber(props) {
  let list = props.data.map(el => {
    return (
      <tr key={el.stuId}>
        <td>{el.name}</td>
        <td>{el.moblie}</td>
        <td>{el.isMale ? '男' : '女'}</td>
        <td>{el.stuId}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>手机号</th>
          <th>性别</th>
          <th>学号</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}
