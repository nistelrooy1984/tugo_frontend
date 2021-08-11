<docs>
  # Header

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-app-bar app dense color="primary">
  menu-list
  <v-toolbar-title>
    router-link(:to='{ name: "Home" }', custom, v-slot='{ navigate }')
      h1(@click='navigate', role='link') TUGO
  </v-toolbar-title>
  <v-spacer></v-spacer>
  user-info
</v-app-bar>
</template>

<script>
/**
 * import
 */
import MenuList from "@/components/molecules/MenuList.vue";
import UserInfo from "@/components/molecules/UserInfo.vue";

/**
 * Vue
 */
export default {
  components: {
    MenuList,
    UserInfo
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  display: flex;
  align-items: center;
  color: #fff;

  h1 {
    content: url("../../assets/svg/logo.svg");
    width: auto;
    height: 26px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
