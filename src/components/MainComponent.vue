<template>
  <div class="main">
    <div>
      <ul
        v-for="(task, index) in tasks"
        :key="task.index"
        :index="index"
        comment="Вначале идут арибуты с динамическими свойствами в конце снеизменяемыми(статическими)"
        id="item-list"
        class="listTask"
      >
        <div class="list-wrapper">
          <span
            class="task-color"
            :style="{
              background: this.tasks[index].color,
            }"
          ></span>
          <li
            class="menu-list-item"
            id="list-item"
            :class="['menu-item', [{ doneStatus: task.done == true }]]"
          >
            {{ task.title }}
          </li>
        </div>
        <label v-if="getDateRange(index) > 0">{{ getDl(index) }}</label>
        <div class="test">
          <label>Выполнено</label>
          <input
            type="checkbox"
            for="list-item"
            v-model="this.tasks[index].done"
          />
        </div>
      </ul>
      <button
        v-on:click="saveTasks()"
        :class="[{ success_save: success == true }]"
        class="save_btn"
        type="button"
      >
        Сохранить
      </button>
      <button v-on:click="refreshTasks()" class="refresh_btn">Сбросить</button>
    </div>
    <v-calendar class="calendar" :attributes="attributes" />
  </div>
</template>

<script>
import "@fontsource/roboto";
import "v-calendar/dist/style.css";

export default {
  name: "mainComponent",
  data() {
    return {
      tasks: [],
      success: [],
      date: new Date(),
      colors: [],
    };
  },
  methods: {
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
    getDateRange(index) {
      return new Date(this.tasks[index].date) - this.date;
    },
    getDl(index) {
      let curDays = Math.floor(this.getDateRange(index) / 1000 / 60 / 60 / 24);
      let curHr = Math.floor(
        this.getDateRange(index) / 1000 / 60 / 60 - curDays * 24
      );
      let curMin = Math.floor(
        this.getDateRange(index) / 1000 / 60 - (curHr * 60 + curDays * 24 * 60)
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
  computed: {
    attributes() {
      return this.tasks.map((t) => ({
        key: `task.${t.id}`,
        dot: t.color,
        dates: t.date,
        customData: t,
      }));
    },
  },
};
</script>

<style>
.list-wrapper {
  display: flex;
}
.listTask {
  font-family: "Roboto";
  border-style: solid;
  border-width: 1px;
  border-color: #e3e3e3;
  margin: 1%;
  box-shadow: 2px 2px 4px #dfdfdf;
}
.calendar {
  display: flex;
  margin-top: 25px;
}
.task-color {
  position: relative;
  top: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: auto;
}
.menu-list-item {
  width: 90%;
  list-style-type: none;
  margin: 10px;
  border-bottom: 1px solid grey;
}
.btn {
  margin-left: 3%;
}
.doneStatus {
  text-decoration: line-through;
  opacity: 0.3;
}
.success_save {
  background: greenyellow;
}
.weekday-position-6,
.weekday-position-7 {
  color: red;
}

.test {
  display: inline-flex;
  border-left: 1px solid black;
  margin-left: 5px;
  padding-left: 5px;
}
</style>
