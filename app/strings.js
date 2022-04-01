exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        let replacer = new RegExp("(.)(?=\\1{" + amount + "})", "g");
        return str.replace(replacer, "");
    },

    wordWrap: function (str, cols) {
        let result = "",
            wordsArray = [];

        wordsArray = str.split(" ");

        result = wordsArray[0];

        for (let i = 1; i < wordsArray.length; i++) {
            if (wordsArray[i].length > cols) {
                result += "\n" + wordsArray[i];
            } else {
                if (result.length + wordsArray[i].length > cols) {
                    result += "\n" + wordsArray[i];
                } else {
                    result += " " + wordsArray[i];
                }
            }
        }

        return result;
    },

    reverseString: function (str) {
        let result = "";
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }

        return result;
    },
};
