import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import LogoutModal from './LogoutModel';
import './Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();

    const showSidebar = () => setSidebar(!sidebar);
    const handleLogout = () => {
        localStorage.removeItem('token');
        setShowLogoutModal(false);
        navigate('/');
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className='menu_bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}>
                    <ul className='nav_menu_items' onClick={showSidebar}>
                        <li className='navbar_toggle'>
                            <Link to="#" className='menu_bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            if (item.title === 'Logout') {
                                return (
                                    <li key={index} className={item.cName} onClick={() => setShowLogoutModal(true)}>
                                        <Link to="#">
                                            {item.icon}
                                            <span className='item_title'>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            }
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className='item_title'>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <LogoutModal show={showLogoutModal} handleClose={() => setShowLogoutModal(false)} handleLogout={handleLogout} />
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;
