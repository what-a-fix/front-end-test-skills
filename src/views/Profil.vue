<template>
  <div id="app">
    <color-vue :color="color" @color-change="updateColor" />
    <widget-vue />

    <router-view />
  </div>
</template>

<script>
import WidgetVue from "@/components/Widget.vue";
import ColorVue from "@/components/Color.vue";

export default {
  name: "Profil",
  components: {
    WidgetVue,
    ColorVue,
  },
  data() {
    return {
      color: "",
    };
  },

  methods: {
    updateColor(eventData) {
      this.color = eventData.cssColor;
    },
  },
};
</script>
<style lang="stylus" scoped>


</style>
