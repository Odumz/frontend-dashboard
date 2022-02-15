<template>
  <div class="flex items-center border-b border-accent w-full xl:gap-6 gap-4 2xl:pr-28 lg:pr-14">
    <div class="button">
      <button class="flex items-center border rounded py-2 px-3">
        <div>
          <SvgIcons class="text-gray-500" name="zap" />
        </div>
        <span class="mx-3">
          Upgrade now
        </span>
      </button>
    </div>
    <div class="gear">
     <SvgIcons class="text-gray-500" name="gear" />
    </div>
    <div class="bell">
      <SvgIcons class="text-gray-500" name="bell" />
    </div>
    <div class="profile">
      <SvgIcons name="avatar" />
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
