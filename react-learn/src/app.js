import React from "react";
import "./app.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./page/Login";
import Admin from "./page/Admin";


import Course from './page/Admin/Course';
import CourseAdd from './page/Admin/CourseAdd';
import Student from './page/Admin/Student';
import StudentAdd from './page/Admin/StudentAdd';
import My404 from './page/404';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/" element={<Admin></Admin>}>
                    <Route path='' element={<Course />} ></Route>
                    <Route path='Course' element={<Course></Course>} >
                        <Route path=':id' element={<Course></Course>} ></Route>
                        <Route path=':year/:month/day' element={<Course></Course>} ></Route>
                    </Route>
                    <Route path='CourseAdd' element={<CourseAdd></CourseAdd>}  ></Route>
                    <Route path='Student' element={<Student></Student>}  ></Route>
                    <Route path='StudentAdd' element={<StudentAdd></StudentAdd>} ></Route>
                </Route>
                <Route path="*" element={<My404></My404>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

