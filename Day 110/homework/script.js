const rows = 7, cols = 6;
let matrix = [];

for (let i = 0; i < rows; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონის ${cols} ელემენტი:`).split(" ").map(Number);
    matrix.push(row);
}

console.log("\nსტრიქონების საშუალო არითმეტიკულები:");
matrix.forEach(row => console.log(row.reduce((a, b) => a + b, 0) / cols));

console.log("\nსვეტების საშუალო არითმეტიკულები:");
for (let j = 0; j < cols; j++) {
    let columnSum = matrix.reduce((sum, row) => sum + row[j], 0);
    console.log(columnSum / rows);
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (j % 2 === 0) {
            matrix[i][j] = Math.floor(matrix[i][j] / 2);
        } else {
            matrix[i][j] %= 13;
        }
    }
}

console.log("\nშეცვლილი მატრიცა:");
matrix.forEach(row => console.log(row.join(" ")));
