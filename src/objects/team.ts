export interface teamState {
  [key: number]: teamObj
}

export interface teamObj {
  profileImage: JSX.Element | null
  firstName: string
  lastName: string
  role: roleTypes
}

export type roleTypes =
  | 'FrontEnd'
  | 'BackEnd'
  | 'FullStack'
  | 'QA'
  | 'Automation'
  | 'SalesForce'
  | 'TechLead'
