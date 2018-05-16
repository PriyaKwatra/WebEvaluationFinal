import {Router} from 'express'


import {Student,Batch,BSMapping,Course, Lecture,Teacher,Subject} from '../db'

const route:Router= Router()
//get all courses
route.get('/', (req, res) => {
    console.log("ok getting")

   Course.findAll()
        .then((courses:any) => {
            res.send(courses)
        })

})
//get a particular course
route.get('/:id', (req, res) => {
    console.log("ok getting")

   Course.findOne({

    where:{id:parseInt(req.params.id)}
   })
        .then((courses:any) => {
            res.send(courses)
        })

})

//post a course
route.post('/', (req, res) => {
    console.log("ok getting")

    Course.create({
    coursename: req.body.coursename,
       



    }).then((course:any) => {
        res.status(201).send(course)
    }
    )

})

//get batches  of a particular course

route.get('/:id/batches', (req, res) => {
    console.log("ok getting")

   Batch.findAll({

     where:{courseId:parseInt(req.params.id)}

   })
        .then((courses:any) => {
            res.send(courses)
        })

})


//post a batch of a particular course
route.post('/:id/batches', (req, res) => {
    console.log("ok getting")

   Batch.create({

    batchname:req.body.batchname,
    courseId:parseInt(req.params.id)

   })
        .then((courses:any) => {
            res.send(courses)
        })

})

//get a particular batch corresponding to a particular courseid
route.get('/:id/batches/:batchid', (req, res) => {
    console.log("ok getting")

   Batch.findAll({

     where:{courseId:parseInt(req.params.id),

        id:parseInt(req.params.batchid)

    }


   })
        .then((courses:any) => {
            res.send(courses)
        })

})

//get all lectures of a batch of a particular course
route.get('/:id/batches/:batchid/lectures', (req, res) => {
    console.log("ok getting")

   Lecture.findAll({

    include: [
        {
            model: Batch,
            where:{
                courseId: parseInt(req.params.id)

            }
        }
        
    ],

    where: {
       
        batchId:parseInt(req.params.batchid)
     }

    


   })
        .then((courses:any) => {
            res.send(courses)
        })

})


//post a lecture of a batch of a particular course
route.post('/:id/batches/:batchid/lectures', (req, res) => {
    console.log("ok getting")

   

    


    Lecture.create({
        lecturename:req.body.lecturename,
        subjectId:req.body.subjectid,
        batchId:req.params.batchid
    
       })
            .then((lectures:any) => {
                res.send(lectures)
            })

})


//get a lecture of a batch of a particular course

route.get('/:id/batches/:batchid/lectures/:lectureid', (req, res) => {
    console.log("ok getting")

   Lecture.findAll({

    include: [
        {
            model: Batch,
            where:{
                courseId: parseInt(req.params.id)

            }
        }
        
    ],

    where: {
       
        batchId:parseInt(req.params.batchid),
        id:parseInt(req.params.lectureid)

     }

    


   })
        .then((courses:any) => {
            res.send(courses)
        })

})


    

//get all students of a batch of a particular course
route.get('/:id/batches/:batchid/students', (req, res) => {
    console.log("ok getting")

    Student.findAll({
       
        include: [{
            model:Batch,
            through: {
                attributes: ['studentId', 'batchId']
            },
            where:{
                id:parseInt(req.params.batchid),
                courseId:parseInt(req.params.id)
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

//get all teachers of a batch of a particular course
route.get('/:id/batches/:batchid/teachers', (req, res) => {
    console.log("ok getting")

    Teacher.findAll({
       
        include: [{
            model:Subject,
            where:{courseId:parseInt(req.params.id)},
           
            include:[{
                model:Course,
                where:{id:parseInt(req.params.id)},
                include:[{
                    model:Batch,
                    where:{id:parseInt(req.params.batchid)},
                }]
            }]
          }],
         
    }).then((teachers:any) => {

        res.status(200).send(teachers)

    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all teachers"
        })
    })
})





export default route