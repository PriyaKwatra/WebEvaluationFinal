import {Router} from 'express'
import {Student,Batch,BSMapping,Subject, Teacher} from '../db'

const route:Router= Router()
//get all subjects
route.get('/', (req, res) => {
    console.log("ok getting")

   Subject.findAll()
        .then((subjects:any) => {
            res.send(subjects)
        })

})

//get a particular subject
route.get('/:id', (req, res) => {
    console.log("ok getting")

   Subject.findOne()
        .then((subject:any) => {
            res.send(subject)
        })

})

//post a subject
route.post('/', (req, res) => {
   Subject.create({
        subjectname: req.body.subjectname,
        courseId:req.body.courseid
     }).then((subject:any) => {
        res.status(201).send(subject)
    }
    )
})


//get all teachers of a subject
 route.get('/:id/teachers', (req, res) => {
    Teacher.findAll({
        where:{
         subjectId:parseInt(req.params.id)
        }
        
 
 
 
     }).then((teacher:any) => {
         res.status(201).send(teacher)
     }
     )
 })


 //post a teacher of a subject
 route.post('/:id/teachers', (req, res) => {
    Teacher.create({
          teachername:req.body.teachername,
         subjectId:parseInt(req.params.id)
        
        
 
 
 
     }).then((teacher:any) => {
         res.status(201).send(teacher)
     }
     )
 })



 export default route