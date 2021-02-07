import { FETCH_TEAM } from '../../actions/team'
import { teamState } from '../../../objects/team'

const intiState: teamState = []

const team = (state = intiState, action: any) => {
  switch (action.type) {
    case FETCH_TEAM:
      return action.payload
    default:
      return state
  }
}

export default team
