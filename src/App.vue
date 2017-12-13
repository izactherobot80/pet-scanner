<template>
  <div id="app">
    <app-header :petname="petname" :ailment="ailment"></app-header>
    <transition name="slide-fade" mode="out-in">
    <router-view v-model="petname" :petname="petname" :ailment="ailment"></router-view>
    </transition>
  </div>
</template>

<script>
import ailments from './list-of-ailments.json'

export default {
  name: 'app',
  created () {
    this.ailment = ailments[Math.floor(Math.random() * ailments.length)];
  },
  data () {
    return {
      petname: '',
      ailment: {},
    }
  },
  watch: {
    '$route' : function () {
      if (this.$route.path.indexOf('welcome') == 1) {
        this.ailment = ailments[Math.floor(Math.random() * ailments.length)];
      }
    }
  }
}
</script>

<style lang="scss">
@import './css/style.scss';
</style>
