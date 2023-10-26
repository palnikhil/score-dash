import React from 'react';
import { IoStatsChart } from "react-icons/io5";
import {FiAward} from "react-icons/fi";
import {AiOutlineFile} from "react-icons/ai";

import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-list-container'>
                <IoStatsChart className='sidebar-icons' />
                <p>Dashboard</p>
            </div>
            <div className='sidebar-list-container active'>
                <FiAward className='sidebar-icons'/>
                <p>Skill Test</p>
            </div>
            <div className='sidebar-list-container'>
                <AiOutlineFile className='sidebar-icons'/>
                <p>Internships</p>
            </div>
        </div>
    );
}

export default Sidebar;