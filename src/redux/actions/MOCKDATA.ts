import faker from 'faker'
import { taskObj } from '../../objects/tasks'
import { teamObj } from '../../objects/team'

export const taskMockData: taskObj[] = [
  {
    id: faker.random.number(),
    title: faker.lorem.words(5),
    description: faker.lorem.paragraph(10),
    status: 'open',
    sprint: ['129', '130'],
    dueDate: faker.date.future(),
    startDay: 1,
    endDay: 5
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(4),
    description: faker.lorem.paragraph(3),
    status: 'blocked',
    sprint: ['101'],
    dueDate: faker.date.past(),
    startDay: 5,
    endDay: 14
  }
]

export const teamMockData: teamObj[] = [
  {
    profileImage: null,
    firstName: 'Adrian',
    lastName: '',
    role: 'FE'
  },
  {
    profileImage: null,
    firstName: 'Max',
    lastName: '',
    role: 'FE'
  },
  {
    profileImage: null,
    firstName: 'Dan',
    lastName: '',
    role: 'BE'
  }
]
