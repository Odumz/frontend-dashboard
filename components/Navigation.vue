<template>
  <div class="">
    <div class="md:flex hidden">
      <div class="w-2/3 flex justify-start">
        <MainMenu />
      </div>
      <div class="w-1/3 flex justify-end">
        <MainSideMenu />
      </div>
    </div>

    <div class="md:flex hidden">
      <div class="w-2/3 flex justify-start">
        <SubMenu />
      </div>
      <div class="w-1/3 flex justify-end">
      <div class="w-full border-b py-2">
        <Search />
      </div>
      </div>
    </div>

    <div class="flex md:hidden">
      <MobileMenu />
    </div>

  </div>
</template>

<script>
export default {
    name: "MainNavigation",
    setup() {
    },
}
</script>
