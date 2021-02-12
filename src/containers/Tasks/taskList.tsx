import React, { Component } from 'react'
import taskStatus from './taskStatus'
import { taskObj } from '../../objects/tasks'

interface TaskListProps {
  tasks: taskObj[]
}

export class TaskList extends Component<TaskListProps> {
  taskList = () => {
    return (
      <div className='task-list'>
        <div className='task-list__label-w'>
          <div className='task-list__label-item'>Title</div>
          <div className='task-list__label-item'>Status</div>
          <div className='task-list__label-item'>Assignee</div>
          <div className='task-list__label-item'>Start/End Day*</div>
        </div>
        {this.taskItem()}
      </div>
    )
  }

  taskItem = () => {
    const { tasks } = this.props
    return tasks.map((key) => {
      return (
        <div key={key.id} className='task-list__item-w'>
          <span className='task-list__item-key'>{key.title}</span>
          <span className='task-list__item-key'>{taskStatus(key.status)}</span>
          <span className='task-list__item-key'>{key.assignee}</span>
          <span className='task-list__item-key'>
            {key.startDay}/{key.endDay}
          </span>
        </div>
      )
    })
  }

  render() {
    return <>{this.taskList()}</>
  }
}

export default TaskList
