<template>
  <div class="flex justify-between">
    <div class="filter flex items-center justify-around gap-3">
      <div class="flex px-3 gap-2 py-2 rounded shadow-md bg-primary-accent text-primary">
        <span>All time</span>
        <img src="~/assets/img/cancel.svg" alt="">
      </div>
      <div class="flex px-3 gap-2 py-2 rounded shadow-md bg-primary-accent text-primary">
        <span>US, AU, +4</span>
        <img src="~/assets/img/cancel.svg" alt="">
      </div>
      <div class="flex gap-2 px-3 py-2 rounde-md shadow-md">
        <img src="~/assets/img/filter.svg" alt="">
        <span>More filters</span>
      </div>
    </div>
    <div class="search">
      <Search />
    </div>
  </div>
</template>


