import React from 'react'
import Layout from "../../component/Layout";
import MyHeader from "../../component/Header";
import MyMenu from "../../component/Menu";
import { Outlet } from 'react-router-dom';
export default function Admin() {
    return (
        <Layout
            header={<MyHeader></MyHeader>}
            aside={<MyMenu></MyMenu>}
        >
            <Outlet></Outlet>
        </Layout>
    )
}
