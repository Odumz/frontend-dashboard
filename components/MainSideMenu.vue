<template>
  <div class="flex items-center border-b border-accent w-full xl:gap-6 gap-4 xl:pr-28 lg:pr-20 md:pr-12 pr-5 py-3">
    <div class="button">
      <button class="flex border rounded py-2 px-3">
        <div>
          <img src="~/assets/img/zap.svg" alt="zap-icon">
        </div>
        <span class="mx-3">
          Upgrade now
        </span>
      </button>
    </div>
    <div class="gear">
     <img src="~/assets/img/gear.svg" alt="settings-icon">
    </div>
    <div class="bell">
      <img src="~/assets/img/bell.svg" alt="notifications-icon">
    </div>
    <div class="profile">
      <img src="~/assets/img/avatar.svg" alt="user-avatar">
    </div>
  </div>
</template>

<script>
// import { BeakerIcon } from '@heroicons/vue/solid'

export default {
  name: 'MainMenu',
  components: {
    // BeakerIcon
  },
  setup() {
  },
}
</script>
