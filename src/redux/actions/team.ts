export const FETCH_TEAM: string = 'FETCH_TEAM'

// MOCK DATA
// eslint-disable-next-line import/first
import { teamMockData } from './MOCKDATA'

const getTeam = () => (dispatch: any) => {
  console.log('test')
  dispatch({
    type: FETCH_TEAM,
    payload: teamMockData
  })
}

export default getTeam
