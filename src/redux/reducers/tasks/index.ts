import { FETCH_TASKS } from '../../actions/tasks'
import { taskState } from '../../../objects/tasks'
import mapTask from './taskMap'

const intiState: taskState = []

const tasks = (state = intiState, action: any) => {
  switch (action.type) {
    case FETCH_TASKS:
      return mapTask(action.payload)
    default:
      return state
  }
}

export default tasks
