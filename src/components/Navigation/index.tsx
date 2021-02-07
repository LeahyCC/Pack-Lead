import React, { Component } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { FaHome } from 'react-icons/fa'
import { GoChecklist, GoOrganization } from 'react-icons/go'
import { BiBomb } from 'react-icons/bi'

interface navItemInt {
  to: string
  icon: JSX.Element
  title: string
}
type navItem = navItemInt[]

export class Navigation extends Component<RouteComponentProps> {
  navItems = () => {
    const { location } = this.props
    const iconSize = '100%'
    const itemList: navItem = [
      {
        to: '/',
        icon: <FaHome size={iconSize} />,
        title: 'Dashboard'
      },
      {
        to: '/tasks',
        icon: <GoChecklist size={iconSize} />,
        title: 'Tasks'
      },
      {
        to: '/team',
        icon: <GoOrganization size={iconSize} />,
        title: 'Team'
      }
    ]

    return Object.keys(itemList).map((key: any) => {
      const item: navItemInt = itemList[key]
      const activeLink = location.pathname === item.to
      return (
        <Link
          to={item.to}
          className={activeLink ? 'nav__item nav__item--active' : 'nav__item'}
          key={item.title}
        >
          <div className='nav__item-icon'>{item.icon}</div>
          <div className='nav__item-title'>{item.title}</div>
        </Link>
      )
    })
  }

  render() {
    return (
      <nav className='nav__w'>
        <div className='nav__logo'>
          <BiBomb size='100%' />
        </div>
        <ul>{this.navItems()}</ul>
      </nav>
    )
  }
}

export default withRouter(Navigation)
