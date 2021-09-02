<docs>
  # Header

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-app-bar app dense color="primary">
  menu-list(v-if="currentUser")
  <v-toolbar-title>
    router-link(:to='{ name: "Home" }', custom, v-slot='{ navigate }')
      h2(@click='navigate', role='link') TUGO
  </v-toolbar-title>
  <v-spacer></v-spacer>
  user-info
</v-app-bar>
</template>

<script>
/**
 * import
 */
import { mapGetters } from "vuex";
import MenuList from "@/components/molecules/MenuList.vue";
import UserInfo from "@/components/molecules/UserInfo.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    MenuList,
    UserInfo
  },

  /**
   * computed
   */
  computed: {
    ...mapGetters("common", ["get_current_user"]),

    currentUser() {
      return this.get_current_user;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  display: flex;
  align-items: center;
  color: #fff;

  h2 {
    content: url("../../assets/svg/tugo.svg");
    width: auto;
    height: 26px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
