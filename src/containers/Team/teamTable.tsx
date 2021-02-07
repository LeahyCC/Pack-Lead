import React, { Component } from 'react'
import { connect } from 'react-redux'
import getTeam from '../../redux/actions/team'
import { teamObj } from '../../objects/team'

interface TeamTableProps {
  fetchTeam(): void
  team: teamObj[]
}

export class TeamTable extends Component<TeamTableProps> {
  componentDidMount() {
    const { fetchTeam } = this.props
    fetchTeam()
  }

  render() {
    return (
      <div>
        <div>table</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchTeam: () => dispatch(getTeam())
})

const mapStateToProps = (state: any) => {
  return {
    team: state.team
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamTable)
