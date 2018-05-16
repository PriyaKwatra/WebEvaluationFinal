"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var db = new sequelize_1.default('coursedb', 'root', 'Creative@03', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.db = db;
var Course = db.define('courses', {
    coursename: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Course = Course;
var Batch = db.define('batches', {
    batchname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Batch = Batch;
var Teacher = db.define('teachers', {
    teachername: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Teacher = Teacher;
var Student = db.define('students', {
    studentname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Student = Student;
var Subject = db.define('subjects', {
    studentname: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Subject = Subject;
var Lecture = db.define('lectures', {
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
    .then(function () { return console.log("database created"); }).catch(function (error) { return console.log(error); });
