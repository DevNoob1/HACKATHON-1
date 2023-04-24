import React from 'react'
import './home.css'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import Mainl from '../main/mainBody'


export default function () {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <Mainl />

        </div>
    )
}
