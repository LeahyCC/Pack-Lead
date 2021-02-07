import { combineReducers } from 'redux'
import { taskState } from '../../objects/tasks'
import { teamState } from '../../objects/team'
import tasks from './tasks'
import team from './team'

export interface GlobalState {
  tasks: taskState
  team: teamState
}

export default combineReducers<GlobalState>({
  tasks,
  team
})
