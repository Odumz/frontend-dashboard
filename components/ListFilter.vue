<template>
  <div class="flex justify-between">
    <div class="filter flex items-center justify-around gap-3">
      <div class="flex px-3 gap-2 items-center py-2 rounded-lg shadow-md bg-primary-accent text-primary">
        <span>All time</span>
        <SvgIcons name="cancel" />
      </div>
      <div class="flex items-center px-3 gap-2 py-2 rounded-lg shadow-md bg-primary-accent text-primary">
        <span>US, AU, +4</span>
        <SvgIcons name="cancel" />
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded-lg border shadow-md">
        <SvgIcons name="filter" />
        <span>More filters</span>
      </div>
    </div>
    <div class="search">
      <Search />
    </div>
  </div>
</template>


