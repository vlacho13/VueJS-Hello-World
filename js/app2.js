//EXAMPLE OF DIRECTIVES
Vue.directive("salut", {
  bind: function(el, binding, vnode) {
    el.value = binding.value
    console.log("bind")
  },
  update: function(el, binding, vnode, oldvnode) {
    console.log("updated!")
  }
})
//EXAMPLE OF DIRECTIVE(VARIABLE) -- Must be added inside Vue object
let hello = function(el, binding, vnode) {
  el.value = binding.value
  console.log("bind")
}

//EXAMPLES OF FILTERS
Vue.filter("capitalize", function(value) {
  return value.toUpperCase();
})
let reverse = function(value) {
  return value.split(" ").reverse().join(" ");
}

let vm = new Vue({
  el: "#app",
  directives: {
    hello
  },
  data: {
    message : "",
    message2: "this is capitalized filter!",
    message3: "this is a capitalized reversed filter!",
    number: "",
    test: "Test..."
  },
  filters: {
    reverse
  },
  methods: {
    
  }
});
