import React from 'react'
import {BsGrid1X2Fill,BsJustify,BsPersonCircle} from 'react-icons/bs'

import '../Dashboard.css'
import { FaUsers } from 'react-icons/fa';
import { BrowserRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Sidebar({openSidebarToggle, OpenSidebar}) {

    const navigate = useNavigate();
    

    /*const handleDelete = () =>{
        axios.get('http://localhost:3000/logout')
        .then(res =>{
            location.reload(true);
        }).catch(err=>console.log(err));
    }*/

    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/Login')
    }


  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h2 className='menu'>MENU</h2>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className="sidebar-list-item">
                        <Link to='/Home' className='btn' >
                            <BsGrid1X2Fill className="icon"/> Dashboard
                        </Link>
                </li>

                <li className="sidebar-list-item">
                    <Link to='/Friends'  className='btn'>
                         <FontAwesomeIcon icon={faHandshake} className="icon"/> Your Friends
                    </Link>
                </li>

                <li className="sidebar-list-item">
                    <Link to='/Groups' className='btn' >
                         <FaUsers className="icon"/> Your Groups
                    </Link>
                </li>

                <li className="sidebar-list-item">
                    <button onClick={handleLogout} className='btn' >
                         <FaUsers className="icon"/> Logout
                    </button>
                </li>


        </ul>
    </aside>
  )
}

export default Sidebar