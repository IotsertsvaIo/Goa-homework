let n = parseInt(prompt());
let arr = prompt().split(" ").map(Number);

let result = arr.map(num => arr.filter(x => x === num).length);
console.log(result.join(","));

console.log(arr.sort((a, b) => b - a).join(" "));
