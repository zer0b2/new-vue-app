<template>
  <div class="main">
    <ul id="item-list">
      <li
        v-for="(item, index) in items"
        :key="item.value"
        :index="index"
        v-on:click="change_dec(index)"
        v-bind:class="[{ crossedout: item.isActive == true }]"
      >
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
      items: [
        { value: "Text 1", isActive: false },
        { value: "Text 2", isActive: false },
      ],
    };
  },
  methods: {
    change_dec: function (index) {
      console.log(this.items[index].isActive);
      this.items[index].isActive = !this.items[index].isActive;
    },
  },
};
</script>

<style>
.crossedout {
  text-decoration: line-through;
}
</style>
