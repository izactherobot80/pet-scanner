<template>
  <div>
    <h1 class="welcome"><span>Welcome to</span>Pet Health Scanner</h1>
    <h3>Enter your pet's name?</h3>
    <input placeholder="ex. Sandy, Watermelon, Steve" class="input-pet-name" type="text" @change="updatePetName($event.target.value)" @input="updatePetName($event.target.value)"/>
    <router-link to="/scan" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  methods:{
    updatePetName (value) {
      this.$emit('input',value)
    }
  }
}
</script>