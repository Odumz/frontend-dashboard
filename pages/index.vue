<template>
  <div class="home xl:px-28 lg:px-14 md:px-7 px-4 text-muted grid">
    <!-- <WelcomeCard /> -->
    <div class="grid lg:flex w-full gap-5 my-5">
      <Cards>
        <template #title>
          Total customers
        </template>
        <template #stats>
          2,420
        </template>
        <template #graph>
          <SvgIcons name="total-customers" />
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-green pr-1">
            <span>
              <SvgIcons name="arrow-up" />
            </span>
            40 %
          </p>
        </template>
      </Cards>
      <Cards>
        <template #title>
          Members
        </template>
        <template #stats>
          1,210
        </template>
        <template #graph>
          <SvgIcons name="members" />
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-red pr-1">
            <span>
              <SvgIcons name="arrow-down" />
            </span>
            10 %
          </p>
        </template>
      </Cards>
      <Cards>
        <template #title>
          Active now
        </template>
        <template #stats>
          316
        </template>
        <template #graph>
          <SvgIcons name="total-customers" />
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-green pr-1">
            <span>
              <img src="~/assets/img/arrow-up.svg" alt="">
            </span>
            20 %
          </p>
        </template>
      </Cards>
    </div>
    <div class="list-filter pt-7">
      <ListFilter />
    </div>
    <div class="list-items">
      <ListItems class="hidden lg:flex" />
      <ListItem class="lg:hidden flex" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
