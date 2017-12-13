<template>
  <div>
    <h1 class="healthy"><span>GREAT JOB DOC!</span>{{ petname }} is</h1>
    <h1 class="diagnosis">HEAlTHY</h1>
    <router-link to="/welcome" class="start btn">START OVER</router-link>
  </div>
</template>

<script>
export default {
  name: 'healthy',  
  props:['petname','ailment']
}
</script>