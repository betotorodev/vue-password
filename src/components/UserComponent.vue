<template>
  <section class="user">
    <div class="avatar">
      <IconAvatar />
    </div>
    <div class="profile">
      <p>Business Account</p>
      <h5>Sarah Bills</h5>
    </div>
  </section>
</template>

<script setup>
  import IconAvatar from '@/components/icons/IconAvatar.vue'

</script>

<style>
.user {
  display: flex;
  align-items: center;
  margin-top: 32px;
}
.avatar {
  width: 78px;
  height: 78px;
  margin-right: 16px;
}
.profile p {
  font-size: 14px;
}
.profile h5 {
  font-size: 18px;
  font-weight: bold;
}
</style>