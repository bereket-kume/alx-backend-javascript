interface DirectorInterface {
    workFromHome(): String;
    getCoffeeBreak(): String;
    workDirectorTasks(): String;
}

interface TeacherInterface {
    workFromHome(): String;
    getCoffeeBreak(): String;
    workTeacherTasks(): String;
}

class Director implements DirectorInterface {
    workFromHome(): String {
        return 'Working from home'
    }
    getCoffeeBreak(): String {
        return 'Getting a coffee break'
    }
    workDirectorTasks(): String {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): String {
        return 'Cannot work from home'
    }
    getCoffeeBreak(): String {
        return 'Cannot have a coffee break'
    }

    workTeacherTasks(): String {
        return 'Getting to work'
    }
}

const createEmployee = (salary: number | string) => {
    if (typeof salary === 'number' && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}

const isDirector = (employee:DirectorInterface | TeacherInterface) => { 
    return employee instanceof Director;
}

const executeWork = (employee:DirectorInterface | TeacherInterface) => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks())
    } else {
        console.log(employee.workTeacherTasks())
    }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass:Subjects) => {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } else {
        return 'Teaching History'
    }
}