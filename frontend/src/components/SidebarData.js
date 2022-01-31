import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Goals',
    path: '/goals',
    icon: <GiIcons.GiGoalKeeper />,
    cName: 'nav-text'
  },
  {
    title: 'To Do List',
    path: '/list',
    icon: <CgIcons.CgList />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <GiIcons.Brain />,
    cName: 'nav-text'
  },
];