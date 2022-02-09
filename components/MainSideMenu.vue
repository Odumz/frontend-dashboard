<template>
  <div class="flex">
    <div class="button">
      <button class="border rounded py-2 px-3">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
        </span>
        <span>
          Upgrade now
        </span>
      </button>
    </div>
    <div class="gear">
      <Icon />
    </div>
    <div class="bell">
      <Icon />
    </div>
    <div class="profile">
      <img src="" alt="user profile picture">
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
