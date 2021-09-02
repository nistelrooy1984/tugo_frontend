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
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
    </v-btn>
  </template>
  <v-list v-if="currentUser">
    <v-list-item v-for="(item, index) in items" :key="index" link>
      router-link(:to='{ name: item.name }', custom, v-slot='{ navigate }')
        span(@click='navigate', role='link') <v-icon class="pr-1">{{ item.icon }}</v-icon> {{ item.title }} 
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
      { title: "Dashboard", name: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Campaigns", name: "Campaigns", icon: "mdi-bullhorn" },
      { title: "Contacts", name: "Contacts", icon: "mdi-account"},
      { title: "Leads", name: "Leads", icon: "mdi-card-account-details" },
      { title: "Organizations", name: "Organizations", icon: "mdi-office-building" }
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
  span {
    color: #000;
    width: auto;
    // height: 26px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
