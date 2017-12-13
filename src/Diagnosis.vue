<template>
  <div>
    <h1>{{ petname }} has</h1>
    <h1 class="diagnosis">{{ ailment.name }}</h1>
    <router-link to="/step1" class="btn"><img src="./assets/fix.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'diagnosis',  
  props:['petname','ailment']
}
</script>