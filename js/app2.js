//EXAMPLE OF DIRECTIVE
Vue.directive("salut", {
  bind: function(el, binding, vnode) {
    el.value = binding.value
    console.log("bind")
  },
  update: function(el, binding, vnode, oldvnode) {
    console.log("update")
  }
})
/*EXAMPLE OF DIRECTIVE(VARIABLE) -- Must be added inside Vue object
let hello = function(el, binding, vnode) {
  el.value = binding.value
  console.log("bind")
}
*/
let vm = new Vue({
  el: "#app",
  /*directives: {
    hello: 
  },*/
  data: {
    message : "",
    number: "",
    test: "Test..."
  },
  methods: {
    
  }
});
