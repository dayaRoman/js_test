exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
        return fn.apply(obj);
    },

    functionFunction: function (str) {
        return function (a) {
            return str + ", " + a;
        };
    },

    makeClosures: function (arr, fn) {
        let result = [];

        let clouseres = function (number) {
            return function () {
                return fn(number);
            };
        };

        for (let i = 0; i < arr.length; i++) {
            result[i] = clouseres(arr[i]);
        }

        return result;
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments: function () {
        let sum = 0;
        for (let arg of arguments) {
            sum += arg;
        }
        return sum;
    },

    callIt: function (fn) {
        let args = [];

        for (let i = 1; i < arguments.length; i++) {
            args[i-1] = arguments[i];
        }

        return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
        let args = [];

        for (let i = 1; i < arguments.length; i++) {
            args[i-1] = arguments[i];
        }

        return function() {
            for (let i = 0; i < arguments.length; i++) {
                args[args.length] = arguments[i];
            }
            return fn.apply(null, args);
        }

        
    },

    curryIt: function (fn) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return fn(a,b,c);
                }
            }
        }
    },
};
