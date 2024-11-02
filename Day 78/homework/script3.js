function diagonalSums(matrix) {
    let primarySum = 0;
    let secondarySum = 0;
    let n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i]; 
        secondarySum += matrix[i][n - i - 1]; 
    }

    return { primarySum, secondarySum };
}
