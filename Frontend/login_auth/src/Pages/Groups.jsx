import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Siderbar";
import { useState } from 'react'
import '../Dashboard.css'


 function Groups(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    const [modal, setModal] = useState(false);
    const toggleModal=()=>{
    setModal(!modal) 
}
    return(
        <div className="grid-container">
                <Header OpenSidebar={OpenSidebar}/>
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <main className='main-container'>

                <div className='main-title'>
                      <h1>Your Groups</h1>
                </div>
                <div className='main-cards'>
                    <div className='card-inner'>
                    <button 
                    onClick={toggleModal}
                    className='btn'>Create New Group</button>
                    </div>
                </div>

                {modal && (
        <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <h2>New Group</h2>
                        <input 
                        className='input'
                        type="text"
                        placeholder="Enter Group Name"
                        />
                        <h4>Add Friends</h4>
                        <button 
                        className='close-modal'
                        onClick={toggleModal}> X </button>
                </div> 
            </div>
        </div>
)}


                <div className='main-title'>
                  <h1>All Groups</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Inner Circle</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Roomates</h3>
                    </div>
                </div>
                </main>
        </div>
    )
 }

 export default Groups