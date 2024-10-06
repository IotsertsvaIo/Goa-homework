function myForEach(arr, cb) {
    for (let i in arr) cb(arr[i], i, arr);
}

myForEach([10, 20, 30], n => console.log(n));

myForEach(['apple', 'banana', 'cherry'], (f, i) => console.log(i + ': ' + f));

const doubled = [];
myForEach([5, 10, 15], n => doubled.push(n * 2));
console.log(doubled);