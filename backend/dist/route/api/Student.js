"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const route = express_1.Router();
//get all students
route.get('/', (req, res) => {
    console.log("ok getting");
    db_1.Student.findAll()
        .then((students) => {
        res.send(students);
    });
});
//post a student
route.post('/', (req, res) => {
    db_1.Student.create({
        studentname: req.body.studentname,
    }).then((student) => {
        res.status(201).send(student);
    });
});
//get a particular student
route.get('/:id', (req, res) => {
    console.log("ok getting");
    db_1.Student.findAll({
        where: {
            id: parseInt(req.params.id)
        }
    })
        .then((students) => {
        res.send(students);
    });
});
//post a batch of a particular student
route.post('/:id/batches', (req, res) => {
    console.log("why not working");
    db_1.BSMapping.create({
        studentId: parseInt(req.params.id),
        batchId: parseInt(req.body.batchId)
    }).then((mapping) => {
        res.status(201).send(mapping);
    });
});
//get all batches of a student
route.get('/:studentId/batches', (req, res) => {
    db_1.Batch.findAll({
        include: [{
                model: db_1.Student,
                through: {
                    attributes: ['studentId', 'batchId']
                },
                where: {
                    id: parseInt(req.params.studentId)
                }
            }],
    }).then((students) => {
        res.status(200).send(students);
    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all students"
        });
    });
});
exports.default = route;
