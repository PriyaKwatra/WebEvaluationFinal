import {Router} from 'express'
import {Student,Batch,BSMapping,Subject, Teacher,Course} from '../db'

const route:Router= Router()

//get all teachers
route.get('/', (req, res) => {
    console.log("ok getting")

   Teacher.findAll()
        .then((teachers) => {
            res.send(teachers)
        })

})

//get a teacher from teacherid
route.get('/:id', (req, res) => {
    console.log("ok getting")

   Teacher.findOne()
        .then((teacher) => {
            res.send(teacher)
        })

})

//get all batches of a teacher
route.get('/:id/batches', (req, res) => {
    console.log("ok getting")

    Teacher.findAll({
       
        include: [{
            model:Subject,
           
            include:[{
                model:Course,
                
                include:[{
                    model:Batch,
                    
                }]
            }]
          }],

          where:{id:parseInt(req.params.id)}
         
    }).then((teachers) => {

        res.status(200).send(teachers)

    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all teachers"
        })
    })

})

//post a teacher

route.post('/', (req, res) => {
    console.log("ok getting")

   Teacher.create({
   teachername:req.body.teachername,
   subjectId:req.body.subjectId


   })
        .then((teachers) => {
            res.send(teachers)
        })

})

export default route