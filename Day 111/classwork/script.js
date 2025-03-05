function manualRStrip(s) {
    while (s.length > 0 && s[s.length - 1] === ' ') {
        s = s.slice(0, -1);
    }
    return s;
}

function manualLStrip(s) {
    while (s.length > 0 && s[0] === ' ') {
        s = s.slice(1);
    }
    return s;
}

