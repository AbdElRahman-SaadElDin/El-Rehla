import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md" 

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<MdIcons.MdDashboard/>,
        cName:'nav-text'
    },
    {
        title:'Courses',
        path:'/courses',
        icon:<FaIcons.FaGraduationCap/>,
        cName:'nav-text'
    },
]