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

  taskItem = () => {
    const { tasks } = this.props
    return Object.keys(tasks).map((key: any) => {
      const task: taskObj = tasks[key]
      return (
        <div key={task.id} className='dash-task__w'>
          <div className='dash-task__title'>{task.title}</div>
          <div className='dash-task__details'>
            <div className='dash-task__assignee'>{task.assignee}</div>
            <div className='dash-task__end-day'>{task.endDay}</div>
          </div>
        </div>
      )
    })
  }

  // title: {task.title} <div>id: {task.id}</div>{' '}
  // <div>status: {task.status}</div>
  // <div>des: {task.description}</div>
  // <div>
  //   start: {task.startDay} end: {task.endDay}
  // </div>

  render() {
    return (
      <div className='dash__W'>
        <h1>Dashboard</h1>
        <div>
          <h2>Tasks</h2>
          {this.taskItem()}
        </div>
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
