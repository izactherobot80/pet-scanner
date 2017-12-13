<template>
  <div>
    <h1>Step 5</h1>
    <h3 class="step-text">{{ ailment.step5 }}</h3>
    <router-link to="/step6" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step5',  
  props:['petname','ailment']
}
</script>