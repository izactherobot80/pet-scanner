<template>
  <div>
    <h1>Step 4</h1>
    <h3 class="step-text">{{ ailment.step4 }}</h3>
    <router-link to="/step5" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step4',  
  props:['petname','ailment']
}
</script>