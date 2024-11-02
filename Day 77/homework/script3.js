function printIncreasingPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                console.log(`(${i}, ${j})`);
            }
        }
    }
}
