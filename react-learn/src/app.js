import React, { lazy, Suspense } from "react";
import "./app.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Admin from "./page/Admin";


import Course from './page/Admin/Course';
import CourseAdd from './page/Admin/CourseAdd';
import Student from './page/Admin/Student';
import StudentAdd from './page/Admin/StudentAdd';
import My404 from './page/404';
import Persion from "./page/Admin/Person";
import Welcome from "./page/Welcome";


const Login = lazy(() => import("./page/Login"))
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading..............</div>}>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/" element={<Admin></Admin>}>
                        <Route path='' element={<Welcome />} ></Route>
                        <Route path='Course' element={<Course></Course>} ></Route>
                        <Route path='CourseAdd' element={<CourseAdd></CourseAdd>}  ></Route>
                        <Route path='Student' element={<Student></Student>}  ></Route>
                        <Route path='StudentAdd' element={<StudentAdd></StudentAdd>} ></Route>
                        <Route path='persion' element={<Persion></Persion>} ></Route>
                    </Route>
                    <Route path="*" element={<My404></My404>}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

