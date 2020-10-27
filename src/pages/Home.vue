<template>
  <div>
    <article class="container container--left">
      <h2 class="text title">Welcome to website</h2>
      <p class="text text-m">Here you can to publish and see fun-arts, plots, persons of heroes future game</p>
    </article>
    <article class="container container--right">
      <h2 class="text title">What is stranger?</h2>
      <p class="text text-m">It is project of one student from Ukraine. It'll be game about life, happiness and plain and love</p>
    </article>
    <article class="container container--warning">
      <hr class="warning-line">
      <h2 class="text title">! . ! . ! Warning zone ! . ! . !</h2>
      <p class="text text-m">This project isn't for Perfectionist and people who CAN do BETTER</p>
    </article>
  </div>
</template>

<script>
import mainStyles from '@/main.sass';

export default {
  name: 'Home',
  css: [
    mainStyles,
  ],
};
</script>

<style lang="sass" scoped>
  @import './../main'
  .content
    background: linear-gradient(180deg, rgba(31,29,28,1) 0%, rgba(117,217,179,1) 24%, rgba(117,217,145,1) 53%, rgba(237,242,148,1) 100%)

  .container
    padding: 0 5rem 5rem
    width: calc(82% - 10rem)
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    &--right
      margin-left: auto
      text-align: right
    &--left
      margin: 0
      padding-top: 5rem
      text-align: left
    &--warning
      width: calc(100% - 10rem)
  .text
    font-size: 32pt
    white-space: unset
    &-m
      margin-top: 0
      color: $page-red
  .title
    font-size: 51pt
    color: $page-yellow

  .warning-line
    background: repeating-linear-gradient(45deg, #e0ef0e, #e0ef0e 20px, #161616 20px, #161616 40px)
    width: 100%
    height: 4vh
    position: absolute
    margin-left: -5rem
    border: none

</style>
