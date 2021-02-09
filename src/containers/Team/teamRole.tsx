import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { FaSalesforce } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { AiFillStar, AiOutlineDatabase } from 'react-icons/ai'
import { roleTypes } from '../../objects/team'

const teamRole = (role: roleTypes) => {
  const iconSize = '16px'
  switch (role) {
    case 'FE':
      return <RiReactjsFill size={iconSize} />
    case 'BE':
      return <AiOutlineDatabase size={iconSize} />
    case 'FULL':
      return <AiFillStar size={iconSize} />
    case 'SalesForce':
      return <FaSalesforce size={iconSize} />
    case 'TechLead':
      return <IoIosFlash size={iconSize} />
    default:
      return ''
  }
}

export default teamRole
