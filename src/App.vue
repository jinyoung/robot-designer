<template>
  <div id="app">
    <robot-designer></robot-designer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RobotDesigner from "@/components/RobotDesigner.vue"

@Component({
    components: {
      RobotDesigner,
    }
  }
)
export default class App extends Vue {}
</script>
