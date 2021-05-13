<template>
  <div class="red">
    Something here is working
    <slot />
  </div>
</template>
<style scoped>
.red {
  background: red;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
