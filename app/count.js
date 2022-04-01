exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
    count: function (start, end) {
      let timer;
      function tick() {
        if (start <= end) {
          console.log(start);
          timer = setTimeout(tick, 100);
          start++;
        }
      }

      tick();

      return {
        cancel () {
          clearTimeout(timer);
        }
      }
    },
};
