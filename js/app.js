new Vue({
  //PART 1 - VUE BASIC FUNCTIONS
  el: "#app",
  data: {
    hello: "Hello Vue World!",
    title: "This is a title",
    link: "http://vuejs.org",
    test: true,
    nameList: ["James", "Liz", "Charlie", "Daphne", "Brian"],
    message: "Modify Me",
    testTwo: true,
    seconds: 0
  },
  methods: {
    close: function() {
      if (this.test) {
        this.test = false;
      } else {
        this.test = true;
      }
    },
    changeStyle: function() {
      if (this.testTwo) {
        return { background: "#00FF00" };
      } else {
        return { background: "#FF0000" };
      }
    }
  },
  //PART 2 - INSTANCING AND LIFECYCLE OVERVIEW
  mounted: function() {
    this.$tictac = setInterval(() => {
      console.log("Tic Tac");
      this.seconds++;
    }, 1000);
  },
  destroyed: function() {
      clearInterval(this.$tictac)
  }
});
