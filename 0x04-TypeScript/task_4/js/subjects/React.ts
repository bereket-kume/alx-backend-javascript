namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingReact: number;
    }

  class React  extends Subject {
    getRequirements() {
        return 'Here is the list of requirements for React'
    }

    getAvailableTeacher() {
        if (!this.teacher?.experienceTeachingReact){
            return 'No available teacher'
        }
        return `Available Teacher: ${this.teacher}`;

    }
  }

}