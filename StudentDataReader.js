const fs = require("fs");
const Student = require("./Student");

class StudentDataReader {     // part of the data access layer the other 2 classes are models
    constructor(fileName) {
        this.fileName = fileName;
    }

    get fileArray() {     // retrieves the file
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(studentRaw => new Student(
            studentRaw.firstName,
            studentRaw.lastName,               // adding this makes the output a Student rahter than just an array
            studentRaw.age,
            studentRaw.grades,
            studentRaw.teacherId,
            studentRaw.id
        ));
    }

    set fileArray(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));     // 

    }
    getStudent(id) {
        return this.fileArray.find(s => s.id == id);
    }

    updateStudent(student) {
        this.fileName = this.fileArray.map(s => {
            if (s.id == student.id) {
                return student;
            } else {
                return s;
            }
        });
    }
    deleteStudent(id) {
        return this.fileArray = this.fileArray.filter(s => s.id != id);
    }

    addStudent(student) {
        return this.fileArray = this.fileArray.concat([student]);
    }
}
module.exports = StudentDataReader;