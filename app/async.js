exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    },

    manipulateRemoteData: function (url) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let result = [];
                for (let i = 0; i < data.people.length; i++) {
                    result[i] = data.people[i].name;
                }
                return result.sort();
            });
    },
};
