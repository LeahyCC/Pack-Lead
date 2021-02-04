import { taskObj } from '../../../objects/tasks'
import isEmptyObj from '../../../helpers/objects'

const mapTask = (taskPayload: taskObj) => {
  if (!isEmptyObj(taskPayload)) {
    return taskPayload
  }
  return {}
}

export default mapTask
