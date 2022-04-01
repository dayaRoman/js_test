exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
    containsNumber: function (str) {
        let nums = /\d/;
        return nums.test(str);
    },

    containsRepeatingLetter: function (str) {
        let repeatingLetters = /([A-Za-z])\1/;
        return repeatingLetters.test(str);
    },

    endsWithVowel: function (str) {
        let endVowel = /[aeiou]$/i;
        return endVowel.test(str);
    },

    captureThreeNumbers: function (str) {
        let firstThree = /\d{3}/;
        if (firstThree.exec(str) === null) {
            return false;
        } else {
            return firstThree.exec(str).join("");
        }
    },

    matchesPattern: function (str) {
      let pattern = /^\d{3}-\d{3}-\d{4}$/;
      return pattern.test(str);
    },

    isUSD: function (str) {
      let usd = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
      return usd.test(str);
    },
};
