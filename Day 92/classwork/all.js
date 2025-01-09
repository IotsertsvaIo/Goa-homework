function ნაკრებებისგაერთიანება(sets) {
    return sets.reduce((union, set) => new Set([...union, ...set]), new Set());
}

function სიმბოლოსიხშირე(str) {
    return [...str].reduce((map, char) => {
        map.set(char, (map.get(char) || 0) + 1);
        return map;
    }, new Map());
}

function ინვერტირებულრუკა(map) {
    const inverted = new Map();
    for (const [key, value] of map) {
        inverted.set(value, key);
    }
    return inverted;
}

function სიმეტრიულისხვაობა(setA, setB) {
    const diffA = [...setA].filter(x => !setB.has(x));
    const diffB = [...setB].filter(x => !setA.has(x));
    return new Set([...diffA, ...diffB]);
}

console.log(ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));
console.log(სიმბოლოსიხშირე("hello"));
console.log(ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])));
console.log(სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5])));
