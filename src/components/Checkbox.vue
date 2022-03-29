<script setup lang="ts">
import { ref } from 'vue'
const check = ref(false)
const props = defineProps<{
  testA: string
}>()

const emit = defineEmits(['update:testA'])
// const emit = defineEmits
</script>

<template>
  <input
    type="text"
    :value="testA"
    @input="$emit('update:testA', $event.target.value)"
  >
  <!-- <el-checkbox v-model="check" label="Option 1" size="large" /> -->
</template>

<style></style>
