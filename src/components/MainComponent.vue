<template>
  <div class="main">
    <ul id="item-list" v-for="task in tasks" :key="task.id">
      <li
        :index="task.id"
        :on-click="change_dec(task.id)"
        :class="['menu-item', [{ crossedout: task.isActive == true }]]"
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
      isActive: false,
    };
  },
  methods: {
    change_dec: function (id) {
      this.tasks[id].isActive = !this.tasks[id].isActive;
    },
    getTask() {
      fetch("tasks.json")
        .then((response) => response.json())
        .then((data) => (this.tasks = data));
      console.log(this.tasks);
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
