"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db = new sequelize_1.default('coursedb', 'root', 'Creative@03', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.db = db;
const Course = db.define('courses', {
    coursename: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Course = Course;
const Batch = db.define('batches', {
    batchname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Batch = Batch;
const Teacher = db.define('teachers', {
    teachername: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Teacher = Teacher;
const Student = db.define('students', {
    studentname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Student = Student;
const Subject = db.define('subjects', {
    studentname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Subject = Subject;
const Lecture = db.define('lectures', {
    lecturename: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Lecture = Lecture;
Course.hasMany(Batch);
Lecture.belongsTo(Batch);
Lecture.belongsTo(Subject);
Subject.belongsTo(Course);
Teacher.belongsTo(Subject);
Batch.belongsToMany(Student, { through: 'bsmapping' });
Student.belongsToMany(Batch, { through: 'bsmapping' });
db.sync()
    .then(() => console.log("database created")).catch((error) => console.log(error));
