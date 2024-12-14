// maartivi

let friends = new Map();
friends.set("Zaza", 16);
friends.set("Jargji", 13);
friends.set("Ioane", 13);

console.log(friends);

// rtuli

class StudentSystem {
    constructor() {
        this.students = new Map();
    }

    addStudent(name, grades) {
        this.students.set(name, grades);
    }

    updateGrades(name, subject, newGrade) {
        if (this.students.has(name)) {
            this.students.get(name)[subject] = newGrade;
        } else {
            console.log("სტუდენტი არ მოიძებნა");
        }
    }

    getAverage(name) {
        if (this.students.has(name)) {
            let grades = Object.values(this.students.get(name));
            return grades.reduce((a, b) => a + b, 0) / grades.length;
        } else {
            return null;
        }
    }

    getRankings() {
        let rankings = Array.from(this.students.keys())
            .map(name => ({
                name: name,
                average: this.getAverage(name),
            }))
            .sort((a, b) => b.average - a.average);

        return rankings;
    }

    displayRankings() {
        let rankings = this.getRankings();
        rankings.forEach((student, index) => {
            console.log(`#${index + 1} ${student.name} - საშუალო ქულა: ${student.average.toFixed(2)}`);
        });
    }
}

// Usage
let system = new StudentSystem();

// სტუდენტების დამატება
system.addStudent("Zaza", { მათემატიკა: 90, ფიზიკა: 85, ქიმია: 80 });
system.addStudent("Jargji", { მათემატიკა: 70, ფიზიკა: 75, ქიმია: 65 });
system.addStudent("Ioane", { მათემატიკა: 95, ფიზიკა: 88, ქიმია: 92 });

// ქულების განახლება
system.updateGrades("Jargji", "მათემატიკა", 80);

// რეიტინგების ჩვენება
system.displayRankings();
