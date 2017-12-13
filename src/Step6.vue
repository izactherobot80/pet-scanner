<template>
  <div>
    <h1>Step 6</h1>
    <h3 class="step-text">{{ ailment.step6 }}</h3>
    <router-link to="/rescan" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'step6',  
  props:['petname','ailment']
}
</script>