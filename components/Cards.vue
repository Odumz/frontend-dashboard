<template>
  <div class="shadow-lg border rounded-lg p-7 w-full">
    <div class="pb-5 flex items-center justify-between">
      <p class="text-gray-900">
        <slot name="title"></slot>
      </p>
      <div>
        <SvgIcons name="ellipsis" />
      </div>
    </div>
    <div class="items-center flex justify-between">
      <div class="stats py5">
        <p class="text-4xl text-gray-900"><slot name="stats"></slot></p>
      </div>
      <slot name="graph"></slot>
    </div>
    <div class="footer pt-3">
      <span class="flex text-gray-500"><slot name="percentage"></slot> vs last month</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsCard",
  setup() {

  },
}
</script>
