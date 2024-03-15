// Define interface for Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define interface for Teacher
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
export class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

// Teacher class implementing TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

// Create an employee based on salary
export const createEmployee = (salary: number | string): Teacher | Director => {
  return Number(salary) < 500 ? new Teacher() : new Director();
};

// Check if employee is a Director
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work tasks for Director or Teacher
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let res: string | undefined;
  if (isDirector(employee)) {
    res = employee.workDirectorTasks();
  } else {
    res = employee.workTeacherTasks();
  }
  return res!;
}

// Define subject type
type Subjects = 'Math' | 'History';

// Teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Log the result of teaching classes
console.log(teachClass('Math'));
console.log(teachClass('History'));
