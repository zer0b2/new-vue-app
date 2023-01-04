import { createApp } from "vue";
import App from "./App.vue";
import { SetupCalendar } from "v-calendar";

createApp(App).use(SetupCalendar, {}).mount("#app");
