<template>
  <div class="main">
    <ul id="item-list">
      <li v-for="task in tasks" :key="task.index">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import tasksJSON from "../../public/tasks.json";

export default {
  name: "mainComponent",
  data() {
    return {
      tasks: tasksJSON.tasks,
    };
  },
  methods: {
    change_dec: function (index) {
      console.log(this.items[index].isActive);
      this.items[index].isActive = !this.items[index].isActive;
    },
    getTask() {
      fetch("/tasks.json")
        .then((response) => response.json)
        .then((data) => (this.post = data));
    },
  },
  mounted() {
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].title);
    }
    this.getTask();
  },
};
</script>

<style>
.crossedout {
  text-decoration: line-through;
}
</style>
