<docs>
  # Application

  # Overview
  Tugo CRM Sytem

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-app>
  header-pc
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
/**
 * import
 */
import HeaderPc from './components/organisms/HeaderPc.vue';

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    HeaderPc,
  },
}
</script>


<style lang="scss">
// main
@import '@/assets/scss/main.scss';
</style>
