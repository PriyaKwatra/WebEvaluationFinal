export interface BatchInterface {
    id: number;
    batchname: string;
    courseId: number;
}
export interface BSMappingInterface {
    batchId: number;
    studentId: number;
}
export interface CourseInterface {
    id: number;
    coursename: string;
}
export interface LectureInterface {
    id: number;
    lecturename: string;
    batchId: number;
    subjectId: number;
}
export interface StudentInterface {
    studentname: string;
    id: number;
}
export interface SubjectInterface {
    id: number;
    subjectname: string;
    courseId: number;
}
export interface TeacherInterface {
    id: number;
    teachername: string;
    subjectId: number;
}
