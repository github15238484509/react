import React from 'react'
import Layout from "../component/Layout"
import Menu from "../component/Menu"
import HeaderBox from "../component/Header"
export default function index(props) {
    console.log(props);
    if (props.location.pathname === "/login") {
        return props.children
    } else {
        return <Layout header={<HeaderBox></HeaderBox>}
            aside={<Menu></Menu>}
        >
            {props.children}
        </Layout>
    }
}
