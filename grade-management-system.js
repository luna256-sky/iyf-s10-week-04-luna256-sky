const gradeTracker = {
    students: [
        { Samantha: { math: 85, english: 92, science: 78 } },
        { John: { math: 75, english: 80, science: 82 } },
        { Emily: { math: 90, english: 88, science: 95 } },
        { Rebecca: { math: 65, english: 70, science: 60 } }
    ],
    
    addStudent(name, grades) {
        const newStudent = {};
        newStudent[name] = grades;
        this.students.push(newStudent);
    },
    
    getStudent(name) {
        return this.students.find(student => Object.keys(student)[0] === name);
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = student[name];
        const total = Object.values(grades).reduce((sum, grade) => sum + grade, 0);
        return total / Object.keys(grades).length;
    },
    
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => {
                const name = Object.keys(student)[0];
                return student[name][subject];
            })
            .filter(grade => grade !== undefined);
        
        if (subjectGrades.length === 0) return null;
        const total = subjectGrades.reduce((sum, grade) => sum + grade, 0);
        return total / subjectGrades.length;
    },
    
    getTopStudent() {
        const topStudent = this.students.reduce((top, student) => {
            const name = Object.keys(student)[0];
            const avg = this.getStudentAverage(name);
            return avg > top.avg ? { name, avg } : top;
        }, { name: null, avg: 0 });
        return topStudent.name;
    },
    
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(Object.keys(student)[0]) < 70)
            .map(student => Object.keys(student)[0]);
    },
    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = student[name];
        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);
        
        return {
            name,
            grades,
            average: avg.toFixed(2),
            letterGrade: letter
        };
    }
};

