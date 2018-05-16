import {Router} from 'express'


import {Student,Batch,BSMapping,Course} from '../db'

const route:Router= Router()

//get all batches

route.get('/', (req, res) => {
    console.log("ok getting")

   Batch.findAll()
        .then((batches:any) => {
            res.send(batches)
        })

})

route.post('/', (req, res) => {
    console.log("ok getting")

    Batch.create({
    batchname: req.body.batchname,
       



    }).then((batch:any) => {
        res.status(201).send(batch)
    }
    )

})



export default route