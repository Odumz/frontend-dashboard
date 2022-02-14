<template>
  <div class="flex items-center w-full pl-28 border-b border-accent">
    <div class="menu-items leading-6 text-base flex items-center">
      <div class="px-3 bg-gray-50 py-2 rounded-md">
        <NuxtLink to="/">
          <span>Overview</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Notifications</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Analytics</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Saved reports</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>Trade history</span>
        </NuxtLink>
      </div>
      <div class="px-3">
        <NuxtLink to="/">
          <span>User reports</span>
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
