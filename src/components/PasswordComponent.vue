<template>
   <section class="password-container">
      <label>Password</label>
      <div class="input-container">
        <div>
          <IconLock />
          <input placeholder="*********" type="password" :value="store.password" @change="inputChange($event)">
        </div>
          <IconEye />
      </div>
    </section>
</template>

<script setup>
import IconLock from '@/components/icons/IconLock.vue'
import IconEye from '@/components/icons/IconEye.vue'
import { usePasswordStore } from '@/store/password.js'

const store = usePasswordStore()
function inputChange(e) {
    const value = e.target.value
    store.setPassword(value)
}
</script>

<style>
.password-container {
  margin-top: 32px;
}
.password-container label {
  font-size: 14px;
  font-weight: 600;
}
.input-container {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}
.input-container div{
  display: flex;
  width: 100%;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  gap: 10px;
}
.input-container input {
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;
}
</style>