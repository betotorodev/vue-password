<template>
  <section class="actions">
    <div>
      <IconSwitch />
      <h3>Stay signed in</h3>
    </div>
    <button @click="handleClick">Continue</button>
  </section>
</template>

<script setup>
import IconSwitch from '@/components/icons/IconSwitch.vue'
import { usePasswordStore } from '@/store/password.js'
const store = usePasswordStore()

function handleClick() {
  alert(store.password)
  store.resetPassword()
}
</script>

<style>
.actions {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
}
.actions div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.actions h3 {
  font-size: 16px;
  font-weight: 700;
  color: #132B50;
}
.actions button {
  right: 41px;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  background: #132B50;
  border: none;
  font-weight: 700;
}
</style>