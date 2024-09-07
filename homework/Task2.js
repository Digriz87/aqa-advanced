const averageGrade = 85;

function getGradeLevel(grade) {
    if (grade < 60) return "Незадовільно";
    if (grade <= 70) return "Задовільно";
    if (grade <= 80) return "Добре";
    if (grade <= 90) return "Дуже добре";
    return "Відмінно";
}

const gradeLevel = getGradeLevel(averageGrade);
console.log(gradeLevel);