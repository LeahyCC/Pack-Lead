export interface taskState {
  [key: number]: taskObj
}

export interface taskObj {
  [key: string]: any
  id: number
  status:
    | 'open'
    | 'in progress'
    | 'dev testing'
    | 'staging testing'
    | 'ready for prod'
    | 'blocked'
  startDay: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  endDay: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  assignee?: string
  sprint?: string[]
  title?: string
  description?: string
  dueDate?: Date
}
