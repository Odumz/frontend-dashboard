<template>
  <div class="flex items-center justify-start border-b border-accent w-full xl:pl-28 lg:pl-14 md:pl-7 pl-4">
    <div class="logo pr-3 py-3">
      <!-- <img src="~/assets/img/logo.svg" class="" alt="logo"> -->
      <SvgIcons name="logo" />
      <!-- <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#ae0000" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> -->
    </div>
    <div class="menu-items leading-6 text-base flex items-center">
      <div class="px-3">
        <NuxtLink to="/">
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="px-3 bg-gray-50 py-2 rounded-md">
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
