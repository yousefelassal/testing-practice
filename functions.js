const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

const caesarCipher = (string, shift) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode((char - 65 + shift) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode((char - 97 + shift) % 26 + 97);
        } else {
            result += string.charAt(i);
        }
    }
    return result;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
};