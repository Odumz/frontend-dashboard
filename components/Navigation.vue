<template>
  <div class="">
    <div class="lg:flex hidden">
      <div class="xl:w-2/3 lg:w-full flex justify-start">
        <MainMenu />
      </div>
      <div class="xl:w-1/3 lg:w-full flex justify-end">
        <MainSideMenu />
      </div>
    </div>

    <div class="lg:flex hidden">
      <div class="w-2/3 flex justify-start">
        <SubMenu />
      </div>
      <div class="w-1/3 flex justify-end">
      <div class="w-full border-b border-accent py-2">
        <Search />
      </div>
      </div>
    </div>

    <div class="flex lg:hidden">
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
