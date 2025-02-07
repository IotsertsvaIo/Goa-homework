function countFirstLetter(string) {
    if (string.length === 0) return 0;
    const firstLetter = string[0];
    let count = 0;
    for (let char of string) {
        if (char === firstLetter) count++;
    }
    return count;
}

console.log(countFirstLetter("banana")); 
