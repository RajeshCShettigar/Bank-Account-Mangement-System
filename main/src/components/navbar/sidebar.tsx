import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const Sidebar = [
    {
        title: 'Home',
        path: '/login',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icons: <RiIcons.RiAdminFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icons: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Netbanking',
        path: '/netbanking',
        icons: <FaIcons.FaRupeeSign/>,
        cName: 'nav-text'
    },
]