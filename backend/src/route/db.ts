import Sequelize from 'sequelize'
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize';
import {CourseInterface,BatchInterface,TeacherInterface,StudentInterface,SubjectInterface,LectureInterface} from '../interface'


declare global {
    type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };}

const db = new Sequelize('coursedb', 'root', 'Creative@03', {
    host: 'localhost',
    dialect: 'mysql'

})

const Course = db.define('courses', {
    coursename: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })

   const Batch = db.define('batches', {
    batchname: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })

   const Teacher = db.define('teachers', {
    teachername: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })


   const Student = db.define('students', {
    studentname: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })
   const Subject = db.define('subjects', {
    subjectname: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })



  
   


    
    
        
       

   

   const Lecture = db.define('lectures', {
   lecturename: {

        type: Sequelize.STRING,
        allowNull: false

    },
   })

   const BSMapping = db.define('bsmappings', {
    id : {type : Sequelize.INTEGER,autoIncrement : true, primaryKey : true}
    })
  



   Course.hasMany( Batch)
   Lecture.belongsTo(Batch)
   Lecture.belongsTo(Subject)
   Subject.belongsTo(Course)
   Teacher.belongsTo(Subject)
   Batch.belongsToMany(Student,{through:'bsmappings'})
   Student.belongsToMany(Batch,{through:'bsmappings'})
   db.sync()
    .then(() => console.log("database created")).catch((error) => console.log(error))

export {
    db,Course,Lecture,Batch,Subject,Teacher,Student,BSMapping
}


  
