"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const route = express_1.Router();
//get all teachers
route.get('/', (req, res) => {
    console.log("ok getting");
    db_1.Teacher.findAll()
        .then((teachers) => {
        res.send(teachers);
    });
});
//get a teacher from teacherid
route.get('/:id', (req, res) => {
    console.log("ok getting");
    db_1.Teacher.findOne()
        .then((teacher) => {
        res.send(teacher);
    });
});
//get all batches of a teacher
route.get('/:id/batches', (req, res) => {
    console.log("ok getting");
    db_1.Teacher.findAll({
        include: [{
                model: db_1.Subject,
                include: [{
                        model: db_1.Course,
                        include: [{
                                model: db_1.Batch,
                            }]
                    }]
            }],
        where: { id: parseInt(req.params.id) }
    }).then((teachers) => {
        res.status(200).send(teachers);
    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all teachers"
        });
    });
});
//post a teacher
route.post('/', (req, res) => {
    console.log("ok getting");
    db_1.Teacher.create({
        teachername: req.body.teachername,
        subjectId: req.body.subjectId
    })
        .then((teachers) => {
        res.send(teachers);
    });
});
exports.default = route;
