<template>
  <header>   
    <a class="logo" href='#'><img src="./assets/logo.svg"></a>
    <h2 v-if="petname.length > 0 && $route.path.indexOf('welcome') != 1 && $route.path.indexOf('scan') != 1 && $route.path.indexOf('healthy') != 1" class="pet-name">{{ petname }}</h2>
    <h2 v-if="ailment.name.length > 0 && $route.path.indexOf('welcome') != 1 && $route.path.indexOf('scan') != 1 && $route.path.indexOf('healthy') != 1" class="ailment">{{ 'Has Signs Of ' + ailment.name }}</h2>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:['petname', 'ailment']
}
</script>