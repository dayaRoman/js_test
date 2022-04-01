exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        let dirArr = [];
        let fileList = [];
        function process(data) {
            let fileName;
            let files = data.files;

            dirArr.push(data.dir);

            for (let item = 0; item < files.length; item++) {
                fileName = files[item];
                if (typeof fileName === "string") {
                    if (!dirName || dirArr.indexOf(dirName) > -1) {
                        fileList.push(files[item]);
                    }
                } else {
                    process(files[item]);
                }
            }
            dirArr.pop();
        }
        process(data);
        return fileList;
    },

    permute: function (arr) {
        let temp = [];
        let answer = [];

        function log() {
            answer.push(temp.slice());
        }

        function process() {
            let item;

            for (let i = 0; i < arr.length; i++) {
                item = arr.splice(i, 1)[0];
                temp.push(item);

                if (arr.length) {
                    process();
                } else {
                    log();
                }

                arr.splice(i, 0, item);
                temp.pop();
            }

            return answer;
        }

        return process();
    },

    fibonacci: function (n) {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },

    validParentheses: function (n) {
        if (n == 0) return [""];

        let result = [];
        for (let i = 0; i < n; ++i) {
            let lefts = this.validParentheses(i);
            let rights = this.validParentheses(n - i - 1);

            for (let l = 0; l < lefts.length; ++l)
                for (let r = 0; r < rights.length; ++r)
                    result.push("(" + lefts[l] + ")" + rights[r]);
        }

        return result;
    },
};
