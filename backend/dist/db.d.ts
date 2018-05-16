/// <reference types="sequelize" />
import Sequelize from 'sequelize';
declare const db: Sequelize.Sequelize;
declare const Course: Sequelize.Model<{}, {}>;
declare const Batch: Sequelize.Model<{}, {}>;
declare const Teacher: Sequelize.Model<{}, {}>;
declare const Student: Sequelize.Model<{}, {}>;
declare const Subject: Sequelize.Model<{}, {}>;
declare const Lecture: Sequelize.Model<{}, {}>;
export { db, Course, Lecture, Batch, Subject, Teacher, Student };
