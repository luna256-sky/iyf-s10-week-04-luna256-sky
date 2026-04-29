const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(student => student.name);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);