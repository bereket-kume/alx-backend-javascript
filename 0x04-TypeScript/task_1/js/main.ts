interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher= (firstName: string, lastName: string): string =>{
    return `${firstName.charAt(0)}. ${lastName}`
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(): string{
        return 'Currently working'
    }

    displayName(): string {
        return `${this.firstName}`
    }
}


  const student = new StudentClass("Paul", "jerry");
  console.log(student.displayName())
  console.log(student.workOnHomework())