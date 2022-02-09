<template>
  <div class="shadow-lg border rounded p-7 w-full">
    <div class="card-header flex items-center justify-between">
      <p class="">
        <slot name="title"></slot>
      </p>
      <div>
        <img src="../assets/img/v-ellipsis.svg" alt="action-menu">
      </div>
    </div>
    <div class="items-center flex justify-around">
      <div class="stats py-5">
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
