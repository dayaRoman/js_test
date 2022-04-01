exports = typeof window === "undefined" ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        if (num % 3 == 0) {
            if (num % 5 == 0) {
                return "fizzbuzz";
            }
            return "fizz";
        }
        else if (num % 5 == 0) {
          return "buzz";
        }
        return typeof num == "number" ? num : false;
    },
};
