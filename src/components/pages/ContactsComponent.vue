<docs>
  # Contacts

  # Overview

  # Author
  - Tunigo Ltd.co ThinhNH
</docs>

<template lang="pug">
main#ContactsComponent
  contacts-menu-actions-component
  .l-column-20
    contacts-menu-sidebars-component
  <v-divider vertical></v-divider>
  .l-column-80
    contacts-list-view-component
</template>

<script>
/**
 * import
 */
import { mapActions } from "vuex";
import ContactsMenuActionsComponent from "@/components/atoms/contacts/ContactsMenuActionsComponent.vue";
import ContactsMenuSidebarsComponent from "@/components/molecules/contacts/ContactsMenuSidebarsComponent.vue";
import ContactsListViewComponent from "@/components/molecules/contacts/ContactsListViewComponent.vue";

/**
 * Vue
 */
export default {
  /**
   * components
   */
  components: {
    ContactsMenuActionsComponent,
    ContactsMenuSidebarsComponent,
    ContactsListViewComponent
  },

  /**
   * methods
   */
  methods: {
    ...mapActions("contacts", ["get_contacts"])
  },

  /**
   * beforeMount
   */
  beforeMount: function() {
    this.get_contacts();
  }
};
</script>

<style lang="scss" scoped>
.v-divider {
  height: calc(100vh - 48px - 6px - 48px - 6px);
}
</style>
