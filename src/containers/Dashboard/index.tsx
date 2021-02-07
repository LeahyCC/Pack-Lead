import React, { Component } from 'react'
import { connect } from 'react-redux'
import getTasks from '../../redux/actions/tasks'
import { taskObj } from '../../objects/tasks'

interface DashBoardProps {
  fetchTasks(): void
  tasks: taskObj[]
}

export class DashBoard extends Component<DashBoardProps> {
  componentDidMount() {
    const { fetchTasks } = this.props
    fetchTasks()
  }

  render() {
    return (
      <div className='dash__W'>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchTasks: () => dispatch(getTasks())
})

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
