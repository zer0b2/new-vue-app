<template>
  <div class="main">
    <ul id="item-list" v-for="(task, index) in tasks" :key="task.index">
      <li
        class="menu-list-item"
        :index="index"
        :class="['menu-item', [{ crossedout: task.done == true }]]"
        :key="taskToDo"
        v-on:click="change_class(index)"
      >
        {{ task.title }}
      </li>
      <label>Deadline: {{ getDl() }}</label>
    </ul>
    <button
      class="btn"
      type="button"
      v-on:click="saveTasks()"
      :class="[{ success_save: success == true }]"
    >
      Сохранить
    </button>
  </div>
  <DatePicker class="datePicker" v-model="date" />
</template>

<script>
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

export default {
  name: "mainComponent",
  data() {
    return {
      tasks: [],
      success: [],
      date: new Date(),
    };
  },
  components: {
    DatePicker,
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
      if (JSON.stringify(this.tasks != null)) {
        this.success = true;
      }
    },
    getDl() {
      let curDays = Math.floor(
        (new Date("2023-01-13T19:00:43.511") - this.date) / 1000 / 60 / 60 / 24
      );
      let curHr = Math.floor(
        (new Date("2023-01-13T19:00:43.511") - this.date) / 1000 / 60 / 60 -
          curDays * 24
      );
      console.log(
        Math.floor(
          (new Date("2023-01-13T19:00:43.511") - this.date) / 1000 / 60 / 60 -
            curDays * 24
        )
      );
      console.log(curDays * 24 * 60);
      let curMin = Math.floor(
        (new Date("2023-01-13T19:00:43.511") - this.date) / 1000 / 60 -
          (curHr * 60 + curDays * 24 * 60)
      );
      console.log(curHr * 60);
      return `${curDays} дней ${curHr} часов ${curMin} минут`;
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
.datePicker {
  display: flex;
  margin-top: 25px;
}
.main {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.btn {
  margin-left: 3%;
}
.crossedout {
  text-decoration: line-through;
}
.success_save {
  background: greenyellow;
}
.weekday-position-6,
.weekday-position-7 {
  color: red;
}
</style>
