import { createApp } from "vue";
import App from "./App.vue";
import VCalendar from "v-calendar";

createApp(App).use(VCalendar, {}).mount("#app");
