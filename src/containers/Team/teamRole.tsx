import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { FaSalesforce } from 'react-icons/fa'
import { GoLightBulb } from 'react-icons/go'
import {
  AiFillStar,
  AiOutlineDatabase,
  AiOutlineBug,
  AiOutlineApi
} from 'react-icons/ai'
import { roleTypes } from '../../objects/team'

const teamRole = (role: roleTypes) => {
  const iconSize = '16px'
  switch (role) {
    case 'FrontEnd':
      return <RiReactjsFill size={iconSize} />
    case 'BackEnd':
      return <AiOutlineDatabase size={iconSize} />
    case 'FullStack':
      return <GoLightBulb size={iconSize} />
    case 'TechLead':
      return <AiFillStar size={iconSize} />
    case 'SalesForce':
      return <FaSalesforce size={iconSize} />
    case 'QA':
      return <AiOutlineBug size={iconSize} />
    case 'Automation':
      return <AiOutlineApi size={iconSize} />
    default:
      return ''
  }
}

export default teamRole
