const fs = require("fs");
const path = require("path");

// File System Exercises
// Q1 Create a function that takes 2 arguments. The first should be a file name and the second should be content. The function should create a file with the given name in the current directory with content equal to the content argument
const getData = (fileName, content) => {
    fs.writeFileSync(path.join(__dirname, "${filename}.txt", content));
}
getData();

// Q2 Create a function that takes 1 argument, a file name. The function should return a string that is the whole file.
const wholeFileString  = filename => JSON.parse(fs.readFileSync(this.fileName).toString());

wholeFileString();

// JSON Exercises
// Q1 Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. Create an instance method that returns a json string representing the object.
class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }
}
getInfo() {
    return fs.writeFileSync(this.fileName, JSON.stringify(value));  
}

// Q2 Create a static method that takes a json string representing the object and returns a new instance of student
static newStudent(num) {
    return newStudent (JSON.parse(j)) => new Student(
        person.firstName,
        person.lastName,
        person.age,
        this.generateRandomGrades(),
        validIds[random.getRandomNumber(validIds.length)],
        person.id
    ));
}