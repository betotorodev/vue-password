<template>
  <section>
    <h1>
      {{msg}}
    </h1>
  </section>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style>
  h1 {
    font-weight: 700;
    font-size: 32px;
}
</style>