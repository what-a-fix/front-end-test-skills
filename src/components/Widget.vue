<template>
  <div class="grid-widget">
    <smart-widget-grid :layout="layout">
      <smart-widget slot="0" simple v-model="newLayout" @drapstart="newPosition">
        <div class="layout-center">
          <h3>Simple Widget</h3>
          <h4>Drag on me</h4>
        </div>
      </smart-widget>
      <smart-widget slot="1" title="Default Widget" sub-title="Drag on me" v-model="newLayout" @drapstart="newPosition">
        <div class="layout-center">
          <h3>Widget with Header</h3>
        </div>
      </smart-widget>
      <smart-widget slot="2" title="Full Screen" sub-title="Drag on me" fullscreen v-model="newLayout" @drapstart="newPosition">
        <div class="layout-center">
          <h3>Make any widget full screen</h3>
        </div>
      </smart-widget>
    </smart-widget-grid>
  </div>
</template>

<script>
export default {
  name: "GridWidget",
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 4, i: "0" },
        { x: 4, y: 0, w: 4, h: 4, i: "1" },
        { x: 8, y: 0, w: 4, h: 4, i: "2" }
      ],
    newLayout: ''
    }
  },
  methods: {
      newPosition () {
        this.layout.push({
          i : '',
          X : this.newLayout,
          y : this.newLayout
        })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
