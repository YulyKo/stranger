<template>
  <div>
    <header class="header">
      <div class="flex header__heroes">
        <router-link tag="span" class="admin-page" to="/admin">крест - лінка до адмінки</router-link>
        <nav class="flex header__heroes_menu">
          <div class="menu__hero">
            <router-link tag="a" class="menu__hero_link-container" to="/registration">Registration</router-link>
            <router-link tag="a" to="/" class="menu__hero_link-container">Home</router-link>
            hero
          </div>
          <div class="menu__hero">
            <div class="menu__hero_link-container">
              <img class="cloud"
                  src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fnool.png?alt=media&token=398bf52d-973f-483b-9e64-49b8ffb3cddc" alt="">
              <router-link tag="a" class="link-container__link" to="/plots">Plots</router-link>
            </div>
            <img class="menu__hero_mam"
                src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fmam.png?alt=media&token=00227d42-09c9-4c4b-8ad3-a82524b83d62" alt="no">
            hero
          </div>
          <div class="menu__hero">
            <router-link tag="a" to="/heroes" class="menu__hero_link-container">Heroes</router-link>
            <img class="menu__hero_dad"
                src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fpappy.png?alt=media&token=87655878-1b7f-45aa-bb55-dcccda789a28" alt="no">
          </div>
            <div class="menu__hero">
              <router-link tag="a" to="/locations" class="menu__hero_link-container">Locations</router-link>
              <img class="menu__hero_uncle"
                  src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fhero.png?alt=media&token=7734ec62-5187-4ae2-a474-2623e742e5d9" alt="no">
            </div>
          <div class="menu__hero">
            <router-link tag="a" to="/relationships" class="menu__hero_link-container">Relationships</router-link>
            <img class="menu__hero_sister"
                src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Flolo.png?alt=media&token=1f0798b5-14b7-4bc0-a5c1-cbd034a6b4e5" alt="no">
          </div>
          <div class="menu__hero">
            <router-link tag="a" to="/arts" class="menu__hero_link-container">Arts</router-link>
            <img class="menu__hero_molli"
                src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fcat.png?alt=media&token=301bd314-d5db-4aa0-9e85-0b21aace9ad5" alt="">
          </div>
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
  components: {},
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
  .header__heroes
    width: 100%
    height: 76%
  .header__name
    width: 100%
    height: 20%
    background-color: #1F1D1C
  .header__heroes_menu
    width: 100%
    justify-content: space-around
    background-color: #253934
  .menu__hero
    width: 12em
    height: 100%
    display: flex
    align-items: flex-end
    /*background-color: #275ab9*/
    &:hover > .menu__hero_link-container
      display: block
  .menu__hero_link-container
    display: none
    position: absolute
    &:hover
      color: #42b983
      cursor: pointer
  .footer
    width: 100%
    height: 50vh
    background-color: #fa97d3
    justify-content: space-evenly
    align-items: center
  .admin-page
    background-color: #888888
    &:hover
      background-color: #039be5
      cursor: pointer
  .menu__hero_mam
    height: 69%
  .menu__hero_dad
    height: 70%
  .menu__hero_uncle
    height: 60%
  .menu__hero_sister
    height: 37%
  .menu__hero_molli
    height: 23%
  .cloud
    height: 100px


</style>
