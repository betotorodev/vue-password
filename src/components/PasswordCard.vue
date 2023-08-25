<script setup>
import TitleComponent from '@/components/TitleComponent.vue'
import UserComponent from '@/components/UserComponent.vue'
import PasswordComponent from '@/components/PasswordComponent.vue'
import ActionsComponent from '@/components/ActionsComponent.vue'
import ResetComponent from '@/components/ResetComponent.vue'
</script>

<template>
  <main class="card">
    <TitleComponent msg='Enter your password'/>
    <UserComponent />
    <PasswordComponent />
    <ActionsComponent />
    <ResetComponent />
  </main>
</template>

<style scoped>
.card {
  width: 584px;
  height: auto;
  padding: 85px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 44px 104px 0 rgba(0, 0, 0, 0.1);
}
</style>