import Person from './Person';

class Teacher extends Person {
    constructor(name, age, employeeId, subject) {
        super(name, age);
        this.employeeId = employeeId;
        this.subject = subject;
    }

    getRole() {
        return 'Teacher';
    }

    introduce() {
        return `${super.introduce()} I teach ${this.subject}.`;
    }
}

export default Teacher;
