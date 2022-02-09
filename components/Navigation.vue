<template>
  <div class="px-28">
    <div class="md:flex hidden">
      <div class="w-3/4">
        <MainMenu />
      </div>
      <div class="w-1/4">
        <MainSideMenu />
      </div>
    </div>

    <div class="md:flex hidden">
      <div class="w-3/4">
        <SubMenu />
      </div>
      <div class="w-1/4">
        <Search />
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
