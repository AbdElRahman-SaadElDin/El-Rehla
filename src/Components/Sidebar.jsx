import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import './Sidebar.css'
function Sidebar() {
    const [sidebar,setSidebar] = useState(false);
    const showsidebar =()=>{
        setSidebar(!sidebar);
    }
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar">
            <Link to="#" className='menu_bars'>
            <FaIcons.FaBars onClick={showsidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav_menu active':'nav_menu'}>
            <ul className='nav_menu_items'onClick={showsidebar}>
                <li className='navbar_toggle'>
                    <Link to="#" className='menu_bars'>
                    <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className='item_title'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar