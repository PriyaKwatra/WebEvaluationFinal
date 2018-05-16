"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const route = express_1.Router();
//get all courses
route.get('/', (req, res) => {
    console.log("ok getting");
    db_1.Course.findAll()
        .then((courses) => {
        res.send(courses);
    });
});
//get a particular course
route.get('/:id', (req, res) => {
    console.log("ok getting");
    db_1.Course.findOne({
        where: { id: parseInt(req.params.id) }
    })
        .then((courses) => {
        res.send(courses);
    });
});
//post a course
route.post('/', (req, res) => {
    console.log("ok getting");
    db_1.Course.create({
        coursename: req.body.coursename,
    }).then((course) => {
        res.status(201).send(course);
    });
});
//get batches  of a particular course
route.get('/:id/batches', (req, res) => {
    console.log("ok getting");
    db_1.Batch.findAll({
        where: { courseId: parseInt(req.params.id) }
    })
        .then((courses) => {
        res.send(courses);
    });
});
//post a batch of a particular course
route.post('/:id/batches', (req, res) => {
    console.log("ok getting");
    db_1.Batch.create({
        batchname: req.body.batchname,
        courseId: parseInt(req.params.id)
    })
        .then((courses) => {
        res.send(courses);
    });
});
//get a particular batch corresponding to a particular courseid
route.get('/:id/batches/:batchid', (req, res) => {
    console.log("ok getting");
    db_1.Batch.findAll({
        where: { courseId: parseInt(req.params.id),
            id: parseInt(req.params.batchid)
        }
    })
        .then((courses) => {
        res.send(courses);
    });
});
//get all lectures of a batch of a particular course
route.get('/:id/batches/:batchid/lectures', (req, res) => {
    console.log("ok getting");
    db_1.Lecture.findAll({
        include: [
            {
                model: db_1.Batch,
                where: {
                    courseId: parseInt(req.params.id)
                }
            }
        ],
        where: {
            batchId: parseInt(req.params.batchid)
        }
    })
        .then((courses) => {
        res.send(courses);
    });
});
//post a lecture of a batch of a particular course
route.post('/:id/batches/:batchid/lectures', (req, res) => {
    console.log("ok getting");
    db_1.Lecture.create({
        lecturename: req.body.lecturename,
        subjectId: req.body.subjectid,
        batchId: req.params.batchid
    })
        .then((lectures) => {
        res.send(lectures);
    });
});
//get a lecture of a batch of a particular course
route.get('/:id/batches/:batchid/lectures/:lectureid', (req, res) => {
    console.log("ok getting");
    db_1.Lecture.findAll({
        include: [
            {
                model: db_1.Batch,
                where: {
                    courseId: parseInt(req.params.id)
                }
            }
        ],
        where: {
            batchId: parseInt(req.params.batchid),
            id: parseInt(req.params.lectureid)
        }
    })
        .then((courses) => {
        res.send(courses);
    });
});
//get all students of a batch of a particular course
route.get('/:id/batches/:batchid/students', (req, res) => {
    console.log("ok getting");
    db_1.Student.findAll({
        include: [{
                model: db_1.Batch,
                through: {
                    attributes: ['studentId', 'batchId']
                },
                where: {
                    id: parseInt(req.params.batchid),
                    courseId: parseInt(req.params.id)
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
//get all teachers of a batch of a particular course
route.get('/:id/batches/:batchid/teachers', (req, res) => {
    console.log("ok getting");
    db_1.Teacher.findAll({
        include: [{
                model: db_1.Subject,
                where: { courseId: parseInt(req.params.id) },
                include: [{
                        model: db_1.Course,
                        where: { id: parseInt(req.params.id) },
                        include: [{
                                model: db_1.Batch,
                                where: { id: parseInt(req.params.batchid) },
                            }]
                    }]
            }],
    }).then((teachers) => {
        res.status(200).send(teachers);
    }).catch((err) => {
        res.status(500).send({
            error: "Couldnt find all teachers"
        });
    });
});
exports.default = route;
