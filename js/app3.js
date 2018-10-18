class NotificationsStore {
  constructor() {
    this.state = {
      count: 0
    };
  }

  increment() {
    this.state.count++;
  }

  decrement() {
    this.state.count--;
  }
}

let notifications_store = new NotificationsStore();

let Counter = {
  data: function() {
    return {
      state: notifications_store.state
    }
  },
  computed: {
    count: function() {
      return this.state.count
    }
  },
  methods: {
    increment: function() {
      notifications_store.increment()
    }
  },
  template: `<div>
  <button @click="increment">{{ count }}</button>
  </div>`
};

let Notifications = {
  components: { Counter },
  methods: {
    addNotification: function() {
      notifications_store.increment()
    }
  },
  template: `<div>
  <button @click="addNotification">Add</button>
  </div>`
};

new Vue({
  el: "#app",
  data: {
  },
  components: { Notifications, Counter }
});
