const fs = require("fs");
const Teacher = require("./Teacher");

class TeacherDataReader {     // part of the data access layer the other 2 classes are models
    constructor(fileName) {
        this.fileName = fileName;
    }

    get fileArray() {     // retrieves the file
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(teacherRaw => new Teacher(
            teacherRaw.firstName,
            teacherRaw.lastName,               // adding this makes the output a Teacher rather than just an array
            teacherRaw.age,
            teacherRaw.id
        ));
    }

    set fileArray(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));     // 

    }
    getTeacher(teachers) {
        return teachers.filter(teacher => teacher.Id == this.id);
    }

    updateTeacher(teachers) {
        this.fileName = this.fileArray.map(s => {
            if (s.id == teacher.id) {
                return teacher;
            } else {
                return s;
            }
        });
    }
    deleteTeacher(id) {
        return this.fileArray = this.fileArray.filter(s => s.id != id);
    }

    addTeacher(teacher) {
        return this.fileArray = this.fileArray.concat([teacher]);
    }
}
module.exports = TeacherDataReader;