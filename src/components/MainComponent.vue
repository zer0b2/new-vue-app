<template>
  <div class="main">
    <ul id="item-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.title"
        :index="index"
        :class="['menu-item', [{ crossedout: task.done == true }]]"
        :for="todo"
      >
        {{ task.title }}
        <input
          type="checkbox"
          name="todo"
          :id="todo"
          :value="todo"
          v-model="tasks[index].done"
        />
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
      checked: [],
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
    this.checked = JSON.parse(localStorage.getItem(this.tasks.done)) || [];
  },
  watch: {
    checked(newValue) {
      localStorage.setItem("checked", JSON.stringify(newValue));
    },
  },
};
</script>

<style>
.crossedout {
  text-decoration: line-through;
}
</style>
