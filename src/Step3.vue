<template>
  <div>
    <h1>Step 3</h1>
    <h3 class="step-text">{{ ailment.step3 }}</h3>
    <router-link to="/step4" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step3',  
  props:['petname','ailment']
}
</script>