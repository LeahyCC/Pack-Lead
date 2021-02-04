import { combineReducers } from 'redux'
import { taskState } from '../../objects/tasks'
import tasks from './tasks'

export interface GlobalState {
  tasks: taskState
}

export default combineReducers<GlobalState>({
  tasks
})
