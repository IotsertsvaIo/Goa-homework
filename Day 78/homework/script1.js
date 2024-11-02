function addMatrices(matrixA, matrixB) {
    let result = [];
    for (let i = 0; i < matrixA.length; i++) {
        let row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}
