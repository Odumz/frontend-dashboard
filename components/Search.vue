<template>
  <div class="flex items-center">
    <div class="bg-white shadow px-4 p-2 flex mr-4 rounded-md">
        <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <img src="../assets/img/search.svg" alt="search">
        </span>
        <input v-model="searchText" class="rounded p-1 focus:outline-none" type="text" placeholder="Search" @keyup.esc="close" @keyup="filter">
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  setup() {

  },
}
</script>
