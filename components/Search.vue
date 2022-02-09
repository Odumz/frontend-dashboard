<template>
  <div class="bg-white shadow px-4 p-2 sm:flex mr-4 rounded-md hidden">
      <span class="w-auto flex justify-end items-center text-gray-500 p-2">
          <Icon icon="akar-icons:search" />
      </span>
      <input v-model="searchText" class="rounded p-2 focus:outline-none" type="text" placeholder="Search here..." @keyup.esc="close" @keyup="filter">
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  setup() {

  },
}
</script>
