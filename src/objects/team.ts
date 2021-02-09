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
  | 'FE'
  | 'BE'
  | 'FULL'
  | 'QA'
  | 'AUTOMATION'
  | 'SalesForce'
  | 'TechLead'
