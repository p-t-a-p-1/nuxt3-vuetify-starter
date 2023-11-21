<script setup lang="ts">
const counter = ref(0)

/**
 *
 */
const increment = () => {
  counter.value++
}
</script>

<template>
  <VBtn variant="flat" color="primary" @click="increment">{{ counter }}</VBtn>
</template>
