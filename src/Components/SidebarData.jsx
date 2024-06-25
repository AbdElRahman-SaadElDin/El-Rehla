import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io5" 

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Courses',
        path:'/courses',
        icon:<FaIcons.FaGraduationCap/>,
        cName:'nav-text'
    },
    {
        title:'About us',
        path:'/about',
        icon:<IoIcons.IoChatbox/>,
        cName:'nav-text'
    },
]