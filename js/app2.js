//EXAMPLE OF DIRECTIVES
Vue.directive("salut", {
  bind: function(el, binding, vnode) {
    el.value = binding.value;
    console.log("bind");
  },
  update: function(el, binding, vnode, oldvnode) {
    //console.log("updated!");
  }
});
//EXAMPLE OF DIRECTIVE(VARIABLE) -- Must be added inside Vue object
let hello = function(el, binding, vnode) {
  el.value = binding.value;
  console.log("bind");
};

//EXAMPLE OF FILTERS
Vue.filter("capitalize", function(value) {
  return value.toUpperCase();
});
let reverse = function(value) {
  return value
    .split(" ")
    .reverse()
    .join(" ");
};

//EXAMPLE OF COMPONENTS
Vue.component("mycomponent", {
  props: ["type", "message"],
  template: `<div class="ui message" :class="type">{{ message }}</div>`
});
let mycomponent2 = {
  props: {
    type: { type: String, default: "success" },
    message: String,
  },
  template: `<div class="ui message" :class="type">{{ message }}</div>`
};
let mycomponent3 = {
  props: {
    type: { type: String, default: "success" },
    message: String,
    header: String
  },
  template: `<div class="ui message" :class="type">
    <i class="close icon" @click="close"></i>
    <div class="header">{{ header }}</div>
    {{ message }}
    </div>`,
  methods: {
    close: function() {
      //this.$parent.$data.alert = false
      this.$emit('closeit') //Emite evento @closeit generado manualmente, el cual llama hideAlert
    },    
  }
};

let counter = {
  data: function() {
    return {
      count: 0
    };
  },
  props: {
    start: { type: Number, default: 0 }
  },
  methods: {
    increment: function() {
      this.count++;
    }
  },
  template: `<button @click="increment">{{ count }}</button>`,
  mounted: function() {
    this.count = this.start;
  }
};

let vm = new Vue({
  el: "#app",
  directives: {
    hello
  },
  components: {
    mycomponent2,
    counter,
    mycomponent3
  },
  data: {
    message: "!",
    message2: "this is capitalized filter!",
    message3: "this is a capitalized reversed filter!",
    number: "",
    test: "Test...",
    test2: "Voila!",
    test3: "Error message :(",
    alert: false
  },
  filters: {
    reverse
  },
  methods: {
    showAlert: function() {
      this.alert = true
    },
    hideAlert: function () {
      this.alert = false
    }
  }
});
