import React, { Component } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import teamRole from './teamRole'
import { teamObj } from '../../objects/team'
import ToolTip from '../../components/Tooltip'
import { compareValues } from '../../helpers/objects'

interface TeamTableProps {
  team: teamObj[]
}

interface TeamTableState {
  teamSorted: teamObj[]
  isRoleSorted: boolean
  isNameSorted: boolean
}

export class TeamTable extends Component<TeamTableProps, TeamTableState> {
  constructor(props: TeamTableProps) {
    super(props)
    this.state = {
      teamSorted: props.team,
      isRoleSorted: false,
      isNameSorted: false
    }
  }

  componentDidMount() {
    this.sortTeamByRole()
  }

  sortTeamByRole = () => {
    const { teamSorted, isRoleSorted } = this.state
    const team = !isRoleSorted
      ? teamSorted.sort(compareValues('role'))
      : teamSorted.sort(compareValues('role', 'desc'))
    this.setState({
      teamSorted: team,
      isRoleSorted: !isRoleSorted,
      isNameSorted: false
    })
  }

  sortTeamByName = () => {
    const { teamSorted, isNameSorted } = this.state
    const team = !isNameSorted
      ? teamSorted.sort(compareValues('lastName'))
      : teamSorted.sort(compareValues('lastName', 'desc'))
    this.setState({
      teamSorted: team,
      isNameSorted: !isNameSorted,
      isRoleSorted: false
    })
  }

  table = () => {
    const { isRoleSorted, isNameSorted } = this.state
    const iconSize = 16
    return (
      <div className='team-table'>
        <div className='team-table__label-w'>
          <div className='team-table__label-item' onClick={this.sortTeamByRole}>
            Role
            <MdKeyboardArrowUp
              className={
                isRoleSorted
                  ? 'team-table__label-item-icon team-table__label-item-icon--active'
                  : 'team-table__label-item-icon'
              }
              size={iconSize}
            />
          </div>
          <div className='team-table__label-item' onClick={this.sortTeamByName}>
            Name
            <MdKeyboardArrowUp
              className={
                isNameSorted
                  ? 'team-table__label-item-icon team-table__label-item-icon--active'
                  : 'team-table__label-item-icon'
              }
              size={iconSize}
            />
          </div>
        </div>
        {this.tableItem()}
      </div>
    )
  }

  tableItem = () => {
    const { teamSorted } = this.state
    return teamSorted.map((key) => {
      return (
        <div key={key.firstName} className='team-table__item-w'>
          <div className='team-table__item-icon'>
            <ToolTip position='bottom' text={key.role}>
              {teamRole(key.role)}
            </ToolTip>
          </div>
          <div>
            <span className='team-table__item-name'>
              {key.firstName} {key.lastName}
              <span className='team-table__item-role'>{key.role}</span>
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
