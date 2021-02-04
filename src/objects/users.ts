import { taskObj } from './tasks'

export interface user {
  profileImage: JSX.Element
  name: string
  role: roleTypes
  tasks: taskObj[]
}

type roleTypes = 'developer' | 'product' | 'scrum'
