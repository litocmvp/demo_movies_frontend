<template>
  <div class="home row">
    <div class="col">
      <HelloWorld msg="Peliculas a tu gusto"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
