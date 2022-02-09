<template>
  <div class="home px-28">
    <div class="welcome-note">
      <h1>Welcome back, Olivia</h1>
      <p>Track, manage and forecast your customers and orders.</p>
    </div>
    <div class="cards">
      <Cards />
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
