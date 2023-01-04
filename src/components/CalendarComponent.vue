<template>
  <h1>Календарь</h1>
  <p>Сегодня {{ currDay() }}</p>
</template>

<script>
export default {
  name: "calendatComponent",
  data() {},
  methods: {
    currDay() {
      const current = new Date();
      const date =
        current.getDay() +
        1 +
        "." +
        (current.getMonth() + 1) +
        "." +
        current.getFullYear();
      return date;
    },
  },
};
</script>
<style></style>
