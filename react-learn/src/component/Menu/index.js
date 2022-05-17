import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
export default function MyMenu() {
    useEffect(() => {
        console.log(5656);
    })
    return (
        <nav className='my-menu'>
            <NavLink to={`/`} className="my-time">  欢迎页  </NavLink>
            <NavLink to={`/Course`} className="my-time"> 课程列表   </NavLink>
            <NavLink to={`/CourseAdd`} className="my-time">  添加课程  </NavLink>
            <NavLink to={`/Student`} className="my-time"> 学生列表  </NavLink>
            <NavLink to={`/StudentAdd`} className="my-time">  添加学生  </NavLink>
        </nav>
    )
}
