import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Item from '../Menu/Item'
//import IconTasks from 'components/Common/Icons/Menu/Tasks'
//import ErrorBoundary from 'components/Common/ErrorBoundary'

import { MdOutlineSpaceDashboard } from "react-icons/md";
//import IconMessages from 'components/Common/Icons/Menu/Messages'
//import IconSchedule from 'components/Common/Icons/Menu/Schedule'
//import IconActivity from 'components/Common/Icons/Menu/Activity'
//import IconSettings from 'components/Common/Icons/Menu/Settings'
//import IconDashboard from 'components/Common/Icons/Menu/Dashboard'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-top: 40px;
  }
`

const itemsData = [
  {
    name: 'Dashboard',
    icon: <MdOutlineSpaceDashboard />,
    link: '/dashboard'
  },
  {
    name: 'Messages',
    icon: <MdOutlineSpaceDashboard />,
    link: '/messages'
  },
  {
    name: 'Tasks',
    icon: <MdOutlineSpaceDashboard />,
    link: '/tasks'
  },
  {
    name: 'Schedule',
    icon: <MdOutlineSpaceDashboard />,
    link: '/schedule'
  },
  {
    name: 'Activity',
    icon: <MdOutlineSpaceDashboard />,
    link: '/activity'
  },
  {
    name: 'Settings',
    icon: <MdOutlineSpaceDashboard />,
    link: '/settings'
  }
]

interface IItemProps {
  name: string
  icon: any | ReactNode
  link: string
}

const items = itemsData.map((item: IItemProps, idx: number): object => (
  <Item key={idx} {...item} />
))

const Menu = () => {
  return (
   
      <Wrapper>{items}</Wrapper>

  )
}

export default Menu