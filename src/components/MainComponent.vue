<template>
  <div class="main">
    <ul id="item-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.title"
        :index="index"
        v-on:click="change_class(index)"
        :class="['menu-item', [{ crossedout: task.done == true }]]"
      >
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainComponent",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    change_class: function (index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    getTask() {
      fetch("tasks.json")
        .then((response) => response.json())
        .then((data) => (this.tasks = data));
    },
  },
  mounted() {
    this.getTask();
  },
};
</script>

<style>
.crossedout {
  text-decoration: line-through;
}
</style>
