<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="addCount">增加count</button>
    <!-- <span>{{this.$store.getters.countTip}}</span> -->
  </div>
</template>
<script>
export default {
  methods:{
    addCount(){
      this.$store.commit('addCount');
      
    }
  }
}
</script>
