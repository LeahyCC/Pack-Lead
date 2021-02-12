import faker from 'faker'
import { taskObj } from '../../objects/tasks'
import { teamObj } from '../../objects/team'

export const taskMockData: taskObj[] = [
  {
    id: 20613,
    title: faker.lorem.words(5),
    description: faker.lorem.paragraph(10),
    assignee: 'Maud Considine',
    status: 'in progress',
    workType: ['FE', 'BE'],
    startDay: 1,
    endDay: 5
  },
  {
    id: 57772,
    title: faker.lorem.words(7),
    description: faker.lorem.paragraph(3),
    assignee: 'Jayda Grimes',
    status: 'open',
    workType: ['FE'],
    startDay: 6,
    endDay: 8
  },
  {
    id: 62675,
    title: faker.lorem.words(10),
    description: faker.lorem.paragraph(3),
    assignee: 'Audra Leannon',
    status: 'blocked',
    workType: ['BE', 'FE'],
    startDay: 9,
    endDay: 11
  },
  {
    id: 12566,
    title: faker.lorem.words(6),
    description: faker.lorem.paragraph(3),
    assignee: 'Daniela Davis',
    status: 'dev complete',
    workType: ['AUTOMATION'],
    startDay: 9,
    endDay: 11
  },
  {
    id: 99251,
    title: faker.lorem.words(12),
    description: faker.lorem.paragraph(3),
    assignee: 'Daniela Davis',
    status: 'ready for prod',
    workType: ['QA'],
    startDay: 9,
    endDay: 11
  },
  {
    id: 99233,
    title: faker.lorem.words(12),
    description: faker.lorem.paragraph(3),
    assignee: 'Daniela Davis',
    status: 'ready for prod',
    workType: ['Spike', 'FE'],
    startDay: 9,
    endDay: 11
  }
]

export const teamMockData: teamObj[] = [
  {
    profileImage: null,
    firstName: 'Maud',
    lastName: 'Considine',
    role: 'FrontEnd'
  },
  {
    profileImage: null,
    firstName: 'Jayda',
    lastName: 'Grimes',
    role: 'FrontEnd'
  },
  {
    profileImage: null,
    firstName: 'Audra',
    lastName: 'Leannon',
    role: 'BackEnd'
  },
  {
    profileImage: null,
    firstName: 'Daniela',
    lastName: 'Davis',
    role: 'TechLead'
  },
  {
    profileImage: null,
    firstName: 'Steven',
    lastName: 'Stone',
    role: 'QA'
  },
  {
    profileImage: null,
    firstName: 'Jack',
    lastName: 'Dillon',
    role: 'FullStack'
  },
  {
    profileImage: null,
    firstName: 'Jill',
    lastName: 'Fox',
    role: 'Automation'
  }
]
