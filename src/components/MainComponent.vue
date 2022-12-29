<template>
  <div class="main">
    <ul id="item-list">
      <li v-for="item in items" :key="item.value">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainComponent",
  data() {
    return {
      text: "Firts Project",
      items: [{ value: "Text 1" }, { value: "Text 2" }],
    };
  },
};
</script>
