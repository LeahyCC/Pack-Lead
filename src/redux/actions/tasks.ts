export const FETCH_TASKS: string = 'FETCH_TASKS'

// MOCK DATA
// eslint-disable-next-line import/first
import { taskMockData } from './MOCKDATA'

const getTasks = () => (dispatch: any) => {
  dispatch({
    type: FETCH_TASKS,
    payload: taskMockData
  })
}

export default getTasks
