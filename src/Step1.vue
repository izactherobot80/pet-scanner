<template>
  <div>
    <h1>Step 1</h1>
    <h3 class="step-text">{{ ailment.step1 }}</h3>
    <router-link to="/step2" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step1',  
  props:['petname','ailment']
}
</script>