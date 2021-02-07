import React, { Component } from 'react'
import { TeamTable } from './teamTable'
import { PageTitle } from '../../components/PageTitle'

// eslint-disable-next-line react/prefer-stateless-function
export class Team extends Component {
  render() {
    return (
      <>
        <PageTitle title='Team' />
        <TeamTable />
      </>
    )
  }
}

export default Team
