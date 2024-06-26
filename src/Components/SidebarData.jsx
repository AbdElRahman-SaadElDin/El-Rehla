import React from "react";
<<<<<<< HEAD
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as IoIcons from "react-icons/io";

=======
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io5" 
import * as MdIcons from "react-icons/md"
>>>>>>> 086a6214a01ff4d6d63fe68c731a4f1c38c18164
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
<<<<<<< HEAD
        title: 'About us',
        path: '/about',
        icon: <Io5Icons.IoChatbox />,
        cName: 'nav-text'
=======
        title:'Dashboard',
        path:'/dashboard',
        icon:<MdIcons.MdDashboard/>,
        cName:'nav-text'
    },
    {
        title:'About us',
        path:'/about',
        icon:<IoIcons.IoChatbox/>,
        cName:'nav-text'
>>>>>>> 086a6214a01ff4d6d63fe68c731a4f1c38c18164
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
