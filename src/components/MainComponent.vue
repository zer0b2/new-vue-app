<template>
  <div class="main">
    <div>
      <ul
        id="item-list"
        v-for="(task, index) in tasks"
        :key="task.index"
        :index="index"
      >
        <li
          class="menu-list-item"
          :class="['menu-item', [{ crossedout: task.done == true }]]"
          v-on:click="change_class(index)"
        >
          {{ task.title }}
        </li>
        <label>Deadline: {{ getDl(index) }}</label>
      </ul>
      <button
        class="save_btn"
        type="button"
        v-on:click="saveTasks()"
        :class="[{ success_save: success == true }]"
      >
        Сохранить
      </button>
      <button v-on:click="refreshTasks()" class="refresh_btn">Сбросить</button>
    </div>
    <DatePicker class="datePicker" v-model="date" />
  </div>
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
    refreshTasks() {
      localStorage.clear();
      this.getTask();
    },
    getDl(index) {
      let curDays = Math.floor(
        (new Date(this.tasks[index].date) - this.date) / 1000 / 60 / 60 / 24
      );
      let curHr = Math.floor(
        (new Date(this.tasks[index].date) - this.date) / 1000 / 60 / 60 -
          curDays * 24
      );
      let curMin = Math.floor(
        (new Date(this.tasks[index].date) - this.date) / 1000 / 60 -
          (curHr * 60 + curDays * 24 * 60)
      );
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
  margin-left: 50px;
  margin-top: 25px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
}
.menu-list-item {
  list-style-type: none;
  margin: 10px;
  border-bottom: 1px solid grey;
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
