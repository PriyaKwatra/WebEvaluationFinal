import {Router} from 'express'

import Students from './Student'
import Courses from './Course'
import Batches from './Batch'
import Subjects from './Subject'
import Teachers from './Teacher'

const route:Router= Router()

route.use('/students', Students)

route.use('/courses', Courses)

route.use('/batches', Batches)
route.use('/subjects', Subjects)
route.use('/teachers', Teachers)


export default route
