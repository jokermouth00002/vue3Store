<script setup lang="ts">
import { RouterView } from 'vue-router'
import FunctionRow from '~/components/FunctionRow.vue'
import PCNavBar from '~/components/PcNavBar.vue'
// import Footer from '~/components/Footer.vue'
// import '~/assets/app.scss'
</script>

<template lang='pug'>
#app.relative
  nav.relative.bg-cool-gray-800.w-full
    FunctionRow
  div
    PCNavBar.flex.flex-col.items-center
    //- NavBarMenuDown(selectedCollection='bedRoom')

  RouterView
  Footer(style="background-color: black; color:white").absoulte
</template>

<style scoped>
#app{
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #656565;
}
Footer{
  /* background-color: black; */
}
</style>
