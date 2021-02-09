import React, { Component } from 'react'
import teamRole from './teamRole'
import { teamObj } from '../../objects/team'

interface TeamTableProps {
  team: teamObj[]
}

export class TeamTable extends Component<TeamTableProps> {
  table = () => {
    return (
      <div className='team-table'>
        <div className='team-table__label-w'>
          <div className='team-table__label-item'>Role</div>
          <div className='team-table__label-item'>Name</div>
        </div>
        {this.tableItem()}
      </div>
    )
  }

  tableItem = () => {
    const { team } = this.props
    return team.map((key) => {
      return (
        <div key={key.firstName} className='team-table__item-w'>
          <div className='team-table__item-icon'>{teamRole(key.role)}</div>
          <div>
            <span className='team-table__item-name'>
              {key.firstName} {key.lastName}
            </span>
          </div>
        </div>
      )
    })
  }

  render() {
    return <>{this.table()}</>
  }
}

export default TeamTable
