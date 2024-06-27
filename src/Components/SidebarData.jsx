import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as Io5Icons from "react-icons/io5" 
import * as IoIcons from "react-icons/io" 
import * as MdIcons from "react-icons/md"
export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <FaIcons.FaGraduationCap />,
        cName: 'nav-text'
    },
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<MdIcons.MdDashboard/>,
        cName:'nav-text'
    },
    {
        title:'About us',
        path:'/about',
        icon:<Io5Icons.IoChatbox/>,
        cName:'nav-text'
    },
    {
        title: 'Contact us',
        path: '/contactus',
        icon: <IoIcons.IoMdContact />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '#',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    }
];
