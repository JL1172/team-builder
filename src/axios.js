
import { v4 as uuid } from 'uuid'


const initialTeamMembers = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    fname: 'Michael',
    lname : 'Lang',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMembers })
  },
  post(url, { fname, lname, email, role }) {
    const newTeamMember = { id : uuid(),  fname, lname, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}

