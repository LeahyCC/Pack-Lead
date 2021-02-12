import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TaskList } from './taskList'
import { PageTitle } from '../../components/PageTitle'
import getTasks from '../../redux/actions/tasks'
import { taskObj } from '../../objects/tasks'

interface TasksProps {
  fetchTasks(): void
  tasks: taskObj[]
}

export class Tasks extends Component<TasksProps> {
  componentDidMount() {
    const { fetchTasks } = this.props
    fetchTasks()
  }

  render() {
    const { tasks } = this.props
    return (
      <>
        <PageTitle title='Tasks' />
        <TaskList tasks={tasks} />
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
