<template>
  <div class="nav">
    <nav>
      <router-link tag="a" to="/admin/add-plot">Add plot</router-link>
      <router-link tag="a" to="/admin/add-hero">Add hero</router-link>
      <router-link tag="a" to="/admin/add-art">Add art</router-link>
      <router-link tag="a" to="/admin/add-location">Add location</router-link>
      <router-link tag="a" to="/admin/add-relationship">Add relationship</router-link>
      <div><router-link tag="a" to="/admin/add-tag">Add tag</router-link></div>
    </nav>
    <router-view class="form"></router-view>
  </div>
</template>

<script>

    export default {
        name: "Home",
        components: {},
        methods: {
            setUrl(param) {
              console.log(param);
            },
        },
        computed: {},
    }
</script>

<style scoped>
  .form {
    height: 100vh;
    width: 100%;
  }
</style>
