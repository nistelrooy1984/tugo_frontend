<docs>
  # Menu

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
<v-menu offset-y>
  <template v-slot:activator="{ on, attrs }">
    <v-btn icon v-bind="attrs" v-on="on">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-btn>
  </template>
  <v-list color="primary" v-if="currentUser">
    <v-list-item v-for="(item, index) in items" :key="index" color="#fff">
      router-link(:to='{ name: item.name }', custom, v-slot='{ navigate }')
        h3(@click='navigate', role='link') {{ item.title }} 
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
/**
 * import
 */
import { mapGetters } from "vuex";

/**
 * Vue
 */
export default {
  /**
   * data
   */
  data: () => ({
    items: [
      { title: "Dashboard", name: "Dashboard" },
      { title: "Campaigns", name: "Campaigns" },
      { title: "Contacts", name: "Contacts" },
      { title: "Leads", name: "Leads" },
      { title: "Organizations", name: "Organizations" }
    ]
  }),

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
.v-list-item {
  h3 {
    color: #fff;
    width: auto;
    // height: 26px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }  
  }
}
</style>
