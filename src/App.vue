<template>
  <div>
    <router-link to="/home">home</router-link>
    <router-link to="/category">category</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>

@import "./assets/css/base.css";

</style>
