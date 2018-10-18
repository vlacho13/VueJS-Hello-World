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
    message: String
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
      this.$emit("closeit"); //Emits event @closeit generated manually, which then calls hideAlert
    }
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

let formUser = {
  props: {
    value: Object
  },
  data: function() {
    return {
      user: { ...this.value }
    };
  },
  methods: {
    save: function () {
      this.$emit('input', this.user)
    }
  },
  template: `
  <form class="ui form" @submit.prevent="save">
    <a class="ui teal tag label">Form</a>
    <p><slot name="header"></slot></p>
    <div class="field>
      <label for="">First Name</label>
      <input type="text" v-model="user.firstName">
    </div>
    <div class="field>
      <label for="">Last Name</label>
      <input type="text" v-model="user.lastName">
    </div><br>
    <button class="ui button" type="submit">Send</button>
    <p><slot name="footer"></slot></p>
  </form>  
  `
};

let vm = new Vue({
  el: "#app",
  directives: {
    hello
  },
  components: {
    mycomponent2,
    counter,
    mycomponent3,
    formUser
  },
  data: {
    message: "!",
    message2: "this is capitalized filter!",
    message3: "this is a capitalized reversed filter!",
    number: "",
    test: "Test...",
    test2: "Voila!",
    test3: "Error message :(",
    alert: false,
    user: {
      firstName: "Pablo",
      lastName: "Marmol"
    }
  },
  filters: { reverse },
  methods: {
    showAlert: function() {
      this.alert = true;
    },
    hideAlert: function() {
      this.alert = false;
    }
  }
});
