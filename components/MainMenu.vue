<template>
  <div class="flex items-center border-b w-full pl-28">
    <div class="logo pr-3 py-3">
      <img src="../assets/img/logo.svg" class="" alt="logo">
    </div>
    <div class="menu-items leading-6 text-base flex">
      <div class="px-3 text-primary">
        <NuxtLink to="/">
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Dashboard</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Projects</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Tasks</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Reporting</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Users</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  setup() {

  },
}
</script>

<style lang="postcss" scoped>
/* .menu-items {
  @apply text-primary;
} */
</style>
