"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const route = express_1.Router();
//get all subjects
route.get('/', (req, res) => {
    console.log("ok getting");
    db_1.Subject.findAll()
        .then((subjects) => {
        res.send(subjects);
    });
});
//get a particular subject
route.get('/:id', (req, res) => {
    console.log("ok getting");
    db_1.Subject.findOne()
        .then((subject) => {
        res.send(subject);
    });
});
//post a subject
route.post('/', (req, res) => {
    db_1.Subject.create({
        subjectname: req.body.subjectname,
        courseId: req.body.courseid
    }).then((subject) => {
        res.status(201).send(subject);
    });
});
//get all teachers of a subject
route.get('/:id/teachers', (req, res) => {
    db_1.Teacher.findAll({
        where: {
            subjectId: parseInt(req.params.id)
        }
    }).then((teacher) => {
        res.status(201).send(teacher);
    });
});
//post a teacher of a subject
route.post('/:id/teachers', (req, res) => {
    db_1.Teacher.create({
        teachername: req.body.teachername,
        subjectId: parseInt(req.params.id)
    }).then((teacher) => {
        res.status(201).send(teacher);
    });
});
exports.default = route;
