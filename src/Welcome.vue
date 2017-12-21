<template>
  <div>
    <h1 class="welcome"><span>Welcome to</span>Pet Health Scanner</h1>
    <h3>Enter your pet's name?</h3>
    <!-- v-model will not work with virtual keyboard -->
    <input placeholder="ex. Sandy, Watermelon, Steve" class="input-pet-name" type="text" @change="requestAddPetName($event.target.value)" @input="requestAddPetName($event.target.value)"/>
    <router-link to="/scan" class="btn"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods:{
    requestAddPetName (petN) {
      this.$emit('addPetName', petN);
    }
  }
}
</script>