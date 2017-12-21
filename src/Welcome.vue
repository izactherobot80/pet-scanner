<template>
  <div>
    <h1 class="welcome"><span>Welcome to</span>Pet Health Scanner</h1>
    <h3>Enter your pet's name?</h3>
    <!-- v-model will not work with virtual keyboard @change="requestUpdatePetName($event.target.value)" @input="requestUpdatePetName($event.target.value)"-->
    <input placeholder="ex. Sandy, Watermelon, Steve" class="input-pet-name" type="text" v-model.lazy="petname"/>
    <router-link to="/scan" class="btn" @click.native="requestUpdatePetName"><img src="./assets/arrow.svg"></router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      petname : ''
    }
  },
  methods:{
    requestUpdatePetName () {
      console.log(this.petname);
      this.$emit('updatePetName', this.petname);
    }
  }
}
</script>