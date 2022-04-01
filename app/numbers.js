exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        let result = "";
        for (let i = 7; i >= 0; i--) {
            let bit = num & (1 << i) ? 1 : 0;
            result += bit;
        }

        return result;
    },

    multiply: function (a, b) {
        return (a * 1e5 * b * 1e5) / (1e5 * 1e5);
    },
};
