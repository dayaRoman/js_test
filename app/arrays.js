exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        if (arr.length === 0) {
            return -1;
        }
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function (arr) {
        let sum = 0;
        for (let i of arr) {
            sum += i;
        }
        return sum;
    },

    remove: function (arr, item) {
        let tempArray = [];
        let iter = 0;
        for (let i of arr) {
            if (i === item) {
                continue;
            }
            tempArray[iter] = i;
            iter++;
        }

        return tempArray;
    },

    removeWithoutCopy: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                arr.length--;
                i--;
            }
        }
        return arr;
    },

    append: function (arr, item) {
        arr[arr.length] = item;
        return arr;
    },

    truncate: function (arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },

    prepend: function (arr, item) {
        let iter = 0;
        let tempArray = [];
        tempArray[iter] = item;
        for (let i = 0; i < arr.length; i++) {
            iter++;
            tempArray[iter] = arr[i];
        }

        return tempArray;
    },

    curtail: function (arr) {
        let tempArray = [];
        for (let i = 1; i < arr.length; i++) {
            tempArray[i - 1] = arr[i];
        }

        return tempArray;
    },

    concat: function (arr1, arr2) {
        return [...arr1, ...arr2];
    },

    insert: function (arr, item, index) {
        let tempArray = [];
        for (let i = 0; i < arr.length; i++) {
            tempArray[i] = arr[i];
            if (i === index) {
                tempArray[i] = item;
                break;
            }
        }

        for (let i = index; i < arr.length; i++) {
            tempArray[tempArray.length] = arr[i];
        }

        return tempArray;
    },

    count: function (arr, item) {
        let counter = 0;
        for (let i of arr) {
            if (i === item) {
                counter++;
            }
        }

        return counter;
    },

    duplicates: function (arr) {
        let result = [];
        let j = 0;
        let arr_size = arr.length;
        for (let i = 0; i < arr_size; i++) {
            arr[arr[i] % arr_size] = arr[arr[i] % arr_size] + arr_size;
        }
        for (let i = 0; i < arr_size; i++) {
            if (arr[i] >= arr_size * 2) {
                result[j] = i;
                j++;
            }
        }

        return result;
    },

    square: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] *= arr[i];
        }
        return arr;
    },

    findAllOccurrences: function (arr, target) {
        let result = [];
        let iter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result[iter] = i;
                iter++;
            }
        }
        
        return result;
    },
};
