class StringHelper {
    static reverse(str) {
        return str.split("").reverse().join("");
    }

    static compare(str1, str2) {
        let count = 0;
        let minLength = Math.min(str1.length, str2.length);
        for (let i = 0; i < minLength; i++) {
            if (str1[i] === str2[i]) {
                count++;
            }
        }
        return count;
    }

    static isValid(str) {
        return /^[A-Za-z0-9_]+$/.test(str);
    }
}

class MathHelper {
    static PI = 3.141592653589793;
    static E = 2.718281828459045;
    static DEFAULT_PRECISION = 3;

    static factorial(n) {
        if (n < 0) return null;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    static endsWith5Or0(num) {
        return num % 10 === 0 || num % 10 === 5;
    }

    static roundToNearest5Or0(num) {
        return Math.round(num / 5) * 5;
    }

    static roundDecimal(num) {
        let factor = Math.pow(10, this.DEFAULT_PRECISION);
        return Math.round(num * factor) / factor;
    }
}

