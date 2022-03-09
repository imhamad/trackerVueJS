<script setup>
import HelloWorldVue from './components/HelloWorld.vue';
import WelcomeItem from "./components/HelloWorld.vue";
</script>

<template>
  <div class="custom-styled">
    <img src="./assets/dj.png" alt="">
  </div>
</template>




<style>
@import "./assets/base.css";

#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
header {
  line-height: 1.5;
}

.custom-styled {
  display: block;
  margin: auto;
  text-align: center;
}
.custom-styled img{
  width: 200px;
}
</style>
