<template>
  <div class="main">
    <ul id="item-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.task"
        :index="index"
        v-on:click="change_dec(index)"
        v-bind:class="[{ crossedout: item.isActive == true }]"
      >
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainComponent",
  data() {
    return {};
  },
  methods: {
    change_dec: function (index) {
      console.log(this.items[index].isActive);
      this.items[index].isActive = !this.items[index].isActive;
    },
    getTasks() {
      fetch("tasks.json");
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<style>
.crossedout {
  text-decoration: line-through;
}
</style>
