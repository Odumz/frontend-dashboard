<template>
  <div class="shadow-xl rounded p-7 w-full">
    <div class="pb-5 flex items-center justify-between">
      <p class="">
        <slot name="title"></slot>
      </p>
      <div>
        <img src="../assets/img/v-ellipsis.svg" alt="action-menu">
      </div>
    </div>
    <div class="items-center flex justify-between">
      <div class="stats py5">
        <p class="text-4xl"><slot name="stats"></slot></p>
      </div>
      <slot name="graph"></slot>
    </div>
    <div class="footer pt-3">
      <span class="flex"><slot name="percentage"></slot> vs last month</span>
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
