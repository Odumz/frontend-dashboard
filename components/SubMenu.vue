<template>
  <div class="flex">
    <div class="menu-items leading-6 text-base flex">
      <div class="pr-3 text-primary">
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
