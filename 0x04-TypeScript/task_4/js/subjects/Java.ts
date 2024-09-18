export namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingJava?: number;
    }
     export class Java extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java'
        } 
        getAvailableTeacher() {
            if (!this.teacher?.experienceTeachingJava){
                return 'No available teacher'
            }
            return `Available Teacher: ${this.teacher}`;
    
        }
     }
}