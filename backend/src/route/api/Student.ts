import {Router} from 'express'

import {StudentInterface} from '../../interface'
import {Student,Batch,BSMapping} from '../db'

const route:Router= Router()

//get all students

route.get('/', (req, res) => {
    console.log("ok getting")

   Student.findAll()
        .then((students) => {
            res.send(students)
        })

})

//post a student

route.post('/', (req, res) => {
   

    Student.create({
        studentname: req.body.studentname,
       



    }).then((student:any) => {
        res.status(201).send(student)
    }
    )
})

//get a particular student
route.get('/:id', (req, res) => {
    console.log("ok getting")

   Student.findAll({

where:{
    id: parseInt(req.params.id)
}

   })
        .then((students:any) => {
            res.send(students)
        })

})


//post a batch of a particular student
route.post('/:id/batches', (req, res) => {
   
  console.log("why not working")
    BSMapping.create({
        studentId: parseInt(req.params.id),
        batchId:parseInt(req.body.batchId)
         }).then((mapping) => {
        res.status(201).send(mapping)
    }
    )
})


//get all batches of a student
route.get('/:studentId/batches',(req,res)=>{

    Batch.findAll({
       
        include: [{
            model:Student,
            through: {
                attributes: ['studentId', 'batchId']
            },
            where:{
                id:parseInt(req.params.studentId)
            }
          }],
         
    }).then((students:any) => {

        res.status(200).send(students)

    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all students"
        })
    })
})









export default route


