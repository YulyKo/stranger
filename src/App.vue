<template>
  <div>
    <header class="header">
      <div class="flex header__heroes">
        <router-link tag="span" class="admin-page" to="/admin">крест - лінка до адмінки</router-link>
        <nav class="flex header__heroes_menu">
            <div class="hero hero--gg">
                <router-link tag="a" class="link link_in-gg" to="/registration">Registration</router-link>
                hero</div>
            <router-link tag="span" to="/plots" class="hero link">Plots</router-link>
            <router-link tag="span" to="/heroes" class="hero link">Heroes</router-link>
            <router-link tag="span" to="/locations" class="hero link">Locations</router-link>
            <router-link tag="span" to="/relationships" class="hero link">Relationships</router-link>
            <router-link tag="span" to="/arts" class="hero link">Arts</router-link>
        </nav>
      </div>
      <div class="header__name">name</div>
    </header>
    <main class="">
        <router-view></router-view>
    </main>
    <footer class="flex footer">
      <span>unicorn</span>
      <div class="form">
        <input type="email">
        <input type="text">
        <textarea name="message" id="" cols="30" rows="10"></textarea>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="sass">
  .flex
    display: flex
  .ml-2em
    margin-left: 2em
  .m-3rem
    margin: 3rem
  .main
    width: 100%
    height: 20rem
    background-color: #333
  .form
    input
      display: block

</style>

<style lang="sass" scoped>
  .header
    width: 100%
    height: 50vh
    background-color: #42b983
  .header__heroes
    width: 100%
    height: 76%
  .header__name
    width: 100%
    height: 20%
  .header__heroes_menu
    width: 100%
    justify-content: space-around
  .hero
    width: 12em
    height: 100%
    background-color: #d691ff
    &--gg
      background-color: #b9833c
      &:hover > .link_in-gg
        display: block
  .link_in-gg
    display: none
  .footer
    width: 100%
    height: 50vh
    background-color: #fa97d3
    justify-content: space-evenly
    align-items: center
  .link:hover
    background-color: #333
    color: #42b983
    cursor: pointer
  .admin-page
    background-color: #888888
    &:hover
      background-color: #039be5
      cursor: pointer
</style>
