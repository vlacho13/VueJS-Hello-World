let vm = new Vue({
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
    seconds: 0,
    success: false,
    message2: "Change meEeE",
    firstName: "Diana",
    lastName: "Barrios"
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
    },
    stop: function() {
      vm.$destroy();
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
    clearInterval(this.$tictac);
  },
  //PART 3 - COMBINED PROPERTIES AND WATCHERS
  computed: {
    cls: function() {
      console.log("cls called");
      return this.success === true ? "success" : "error";
    },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName
      },
      set: function(value) {
        let parts = value.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
      }
    }
  },
  watch: {
    message2: function(value) {
      console.log("watch ", value)
    }
  }
});
