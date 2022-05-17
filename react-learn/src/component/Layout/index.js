import React from 'react'
import PropTypes  from "prop-types"
import "./index.css"
export default function Layout(props) {
    console.log(props);
    return (
        <div className='layout-container'>
            <header className='layout-header'>
                {props.header}
            </header>
            <aside className='layout-aside'>
                {props.aside}
            </aside>
            <main className='layout-main'>
                {props.children || props.main}
            </main>
        </div>
    )
}
Layout.defaultProps = {
    header: null,
    aside: null,
    main: null,
    children: null,
}
Layout.propTypes ={
    header: PropTypes.element,
    aside: PropTypes.element,
    main: PropTypes.arrayOf(PropTypes.element),
    // children: PropTypes.array(PropTypes.element),
} 
