import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamTable from './teamTable'
import { PageTitle } from '../../components/PageTitle'
import getTeam from '../../redux/actions/team'
import { teamObj } from '../../objects/team'

interface TeamProps {
  fetchTeam(): void
  team: teamObj[]
}

export class Team extends Component<TeamProps> {
  componentDidMount() {
    const { fetchTeam } = this.props
    fetchTeam()
  }

  render() {
    const { team } = this.props
    return (
      <>
        <PageTitle title='Team' />
        {team?.length && <TeamTable team={team} />}
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Team)
