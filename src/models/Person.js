class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getRole() {
        return 'Person';
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

export default Person;
