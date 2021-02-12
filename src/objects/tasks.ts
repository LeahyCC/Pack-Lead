export interface taskState {
  [key: number]: taskObj
}

export interface taskObj {
  [key: string]: any
  id: number
  title: string
  description: string
  assignee: string
  status: taskStatusType
  workType: taskWorkType[]
  startDay: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  endDay: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
}

export type taskWorkType =
  | 'FE'
  | 'BE'
  | 'QA'
  | 'AUTOMATION'
  | 'SalesForce'
  | 'Spike'

export type taskStatusType =
  | 'open'
  | 'in progress'
  | 'dev complete'
  | 'ready for prod'
  | 'blocked'
