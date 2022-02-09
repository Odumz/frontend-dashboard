<template>
  <div class="home px-28">
    <WelcomeCard />
    <div class="flex w-full gap-5">
      <Cards>
        <template #title>
          Total customers
        </template>
        <template #stats>
          2345
        </template>
        <template #graph>
          <img src="../assets/img/total-customers.svg" alt="total-customer-stats">
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-green pr-3">
            <span>
              <img src="../assets/img/arrow-up.svg" alt="">
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
          2345
        </template>
        <template #graph>
          <img src="../assets/img/members.svg" alt="members">
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-red pr-3">
            <span>
              <img src="../assets/img/arrow-down.svg" alt="">
            </span>
            40 %
          </p>
        </template>
      </Cards>
      <Cards>
        <template #title>
          Total customers
        </template>
        <template #stats>
          2345
        </template>
        <template #graph>
          <img src="../assets/img/total-customers.svg" alt="total-customer-stats">
        </template>
        <template #percentage>
          <p class="flex items-center gap-1 text-green pr-3">
            <span>
              <img src="../assets/img/arrow-up.svg" alt="">
            </span>
            40 %
          </p>
        </template>
      </Cards>
    </div>
    <div class="list-filter">
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
