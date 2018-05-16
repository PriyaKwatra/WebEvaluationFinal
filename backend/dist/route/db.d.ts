/// <reference types="sequelize" />
import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize';
declare global  {
    type SequelizeAttributes<T extends {
        [key: string]: any;
    }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}
declare const db: Sequelize.Sequelize;
declare const Course: Sequelize.Model<{}, {}>;
declare const Batch: Sequelize.Model<{}, {}>;
declare const Teacher: Sequelize.Model<{}, {}>;
declare const Student: Sequelize.Model<{}, {}>;
declare const Subject: Sequelize.Model<{}, {}>;
declare const Lecture: Sequelize.Model<{}, {}>;
declare const BSMapping: Sequelize.Model<{}, {}>;
export { db, Course, Lecture, Batch, Subject, Teacher, Student, BSMapping };
