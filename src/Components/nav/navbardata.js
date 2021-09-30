import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as GrIcons from 'react-icons/gr'
import * as SiIcons from 'react-icons/si'



export const SidebarData = [
    {
    title:'Home',
    link:'/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Projects',
    link:'/projects',
    icon: <GrIcons.GrProjects/>,
    cName: 'nav-text'
    },
    {
    title:'Blog',
    link:'/blog',
    icon: <SiIcons.SiMicroDotBlog/>,
    cName: 'nav-text'
    },
    {
    title:'Resume',
    link:'/resume',
    icon: <MdIcons.MdWork/>,
    cName: 'nav-text'
    },
]