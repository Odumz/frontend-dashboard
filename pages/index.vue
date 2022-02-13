<template>
  <div class="home xl:px-28 lg:px-20 md:px-12 px-5 text-muted">
    <WelcomeCard />
    <div class="flex w-full gap-5 my-5">
      <Cards>
        <template #title>
          Total customers
        </template>
        <template #stats>
          2,420
        </template>
        <template #graph>
          <img src="~/assets/img/total-customers.svg" alt="total-customer-stats">
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-green pr-1">
            <span>
              <img src="~/assets/img/arrow-up.svg" alt="">
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
          <img src="~/assets/img/members.svg" alt="members">
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-red pr-1">
            <span>
              <img src="~/assets/img/arrow-down.svg" alt="">
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
          <img src="~/assets/img/total-customers.svg" alt="total-customer-stats">
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
      <ListItems />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
