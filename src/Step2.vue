<template>
  <div>
    <h1>Step 2</h1>
    <h3 class="step-text">{{ ailment.step2 }}</h3>
    <router-link to="/step3" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step2',  
  props:['petname','ailment']
}
</script>