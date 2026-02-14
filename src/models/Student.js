import Person from './Person';

class Student extends Person {
    constructor(name, age, studentId, major) {
        super(name, age);
        this.studentId = studentId;
        this.major = major;
    }

    getRole() {
        return 'Student';
    }

    introduce() {
        return `${super.introduce()} I am studying ${this.major}.`;
    }
}

export default Student;
