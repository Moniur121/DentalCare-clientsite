import React from 'react';
import { FaHome,FaUserFriends,FaCalendarPlus,FaFileAlt,FaQrcode,FaUserMd} from "react-icons/fa";
 
export const dashboardData=[
    {
        title: 'Home',
        path: '/',
        icon: <FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <FaQrcode/>,
        cName: 'nav-text'
    },
    {
        title: 'Appointment',
        path: '/appointments',
        icon: <FaCalendarPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/patients',
        icon: <FaUserFriends/>,
        cName: 'nav-text'
    },
   
    {
        title: 'Prescription',
        path: '/prescription',
        icon: <FaFileAlt/>,
        cName: 'nav-text'
    },
   
    {
        title: 'Add Doctor',
        path: '/addDoctor',
        icon: <FaUserMd/>,
        cName: 'nav-text'
    },
    {
        title: 'Add Admin',
        path: '/addAdmin',
        icon: <FaUserMd/>,
        cName: 'nav-text'
    } 
]