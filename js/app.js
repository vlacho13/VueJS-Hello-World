new Vue({
  el: "#app",
  data: {
    hello: "Hello Vue World!",
    title: "This is a title",
    link: "http://vuejs.org",
    test: true,
    nameList: ["James", "Liz", "Charlie", "Daphne", "Brian"],
    message: "Modify Me", 
    testTwo: true,  
  },
  methods: {
    close: function() {
       if (this.test) {
         this.test = false
       } else {
         this.test = true
       }
    },
    changeStyle: function() {
      if (this.testTwo) {
        return {background: '#00FF00'}
      } else {
        return {background: '#FF0000'}
      }
    }

  }
});
