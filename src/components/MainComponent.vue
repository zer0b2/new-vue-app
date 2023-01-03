<template>
  <div class="main">
    <ul id="item-list" v-for="(task, index) in tasks" :key="task.index">
      <li
        :index="index"
        :class="['menu-item', [{ crossedout: task.done == true }]]"
        :key="taskToDo"
        v-on:click="change_class(index)"
      >
        {{ task.title }}
      </li>
    </ul>
    <button type="button" v-on:click="saveTasks()">Сохранить</button>
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
    saveTasks() {
      localStorage.setItem("toDoList", JSON.stringify(this.tasks));
    },
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("toDoList")) != null) {
      this.tasks = JSON.parse(localStorage.getItem("toDoList"));
    } else {
      this.getTask();
    }
  },
};
</script>

<style>
ul {
  display: flex;
}
.crossedout {
  text-decoration: line-through;
}
</style>
